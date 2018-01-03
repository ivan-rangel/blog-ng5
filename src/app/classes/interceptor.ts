import { Injectable } from '@angular/core';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
//import { XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth/auth.service';
import { Injector } from '@angular/core';

@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {
    private authS: AuthService;

    constructor(injector: Injector/*  private authService: AuthService */) {
        setTimeout(() => this.authS = injector.get(AuthService));
    }
    //private authS: AuthService = new MyHttpLogInterceptor()
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let authReq
        if (localStorage['blog-token']) {
            authReq = request.clone({ headers: request.headers.set("Authorization", `Bearer ${localStorage['blog-token']}`) });
        } else {
            authReq = request
        }
        return next
            .handle(authReq)
            .do((response: HttpEvent<any>) => {
                if (response instanceof HttpResponse) {
                    if (response.status === 203) {
                        this.authS.getNewToken()
                            .then(() => {
                                console.log('getting new token', response);
                                return response
                            }).catch(response => {
                                console.log(response);
                                return response
                            });
                    }
                    return response
                }
            })
            .catch(response => {
                if (response instanceof HttpErrorResponse) {
                    if (response.status === 401 || response.status === 403) {
                        console.log("You are unathorized to access that route");
                    }
                }

                return Observable.throw(response);
            });
    }
}