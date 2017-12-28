import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private API_URL: string = 'http://local.blog.com:8080/api/v1';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private router: Router) { }

  public saveToken(token: string) {
    localStorage['blog-token'] = token;
  };

  public login(user) {
    let url: string = `${this.API_URL}/users/login`;
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, user, { headers: this.headers }).toPromise()
        .then((res) => {
          let data = res.json();
          let token = data.token;
          this.saveToken(token)
          this.router.navigate(['']);
          resolve();
        })
        .catch(res => {
          let err = res.json();
          alert(err.message)
          reject();
        });
    })
    return promise
  }

  public logout(): void {
    localStorage.removeItem('blog-token');
    this.router.navigate(['']);
    //location.reload(true);
  }

  public signUp(user) {
    let url: string = `${this.API_URL}/users`;
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, user, { headers: this.headers }).toPromise()
        .then((res) => {
          let data = res.json()
          let token = data.token
          this.saveToken(token);
          this.router.navigate(['']);
          resolve()
        })
        .catch((err) => {
          console.log(err);
          reject()
        });
    })
    return promise
  }
  public getToken() {
    return localStorage['blog-token'];
  };

  public isLoggedIn() {
    let token = this.getToken();
    let payload;
    if (token) {
      try {
        payload = token.split('.')[1];
        payload = atob(payload);
        payload = JSON.parse(payload);
        return payload.exp > Date.now() / 1000;
      } catch (error) {
        localStorage = null;
        return false;
      }
    } else {
      return false;
    }
  };

  public currentUser() {
    if (this.isLoggedIn()) {
      var token = this.getToken();
      var payload = token.split('.')[1];
      payload = atob(payload);
      payload = JSON.parse(payload);
      return {
        _id: payload._id,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        accountConfirmed: payload.accountConfirmed,
        userType: payload.userType
      };
    } else {
      return {};
    }
  };
}
