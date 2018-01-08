import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private API_URL: string = '/api/v1';

  constructor(private http: HttpClient, private router: Router) { }

  public saveToken(token: string) {
    localStorage['blog-token'] = token;
  };

  public login(user) {
    let url: string = `${this.API_URL}/users/login`;
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, user).toPromise()
        .then(res => {
          let token = res["token"];
          this.saveToken(token)
          this.router.navigate(['']);
          resolve();
        })
        .catch(res => {
          let err = res
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
      this.http.post(url, user).toPromise()
        .then(res => {
          let token = res["token"]
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
        profileImage: payload.profileImage,
        firstName: payload.firstName,
        lastName: payload.lastName,
        accountConfirmed: payload.accountConfirmed,
        userType: payload.userType
      };
    } else {
      return {};
    }
  };

  public getNewToken () {
    let promise = new Promise((resolve, reject) => {
      this.http.post(`${this.API_URL}/users/newToken`, {}).toPromise()
        .then(response => {
          if (this.currentUser()["userType"] !== 'admin') {
            let token = response["token"]
            this.saveToken(token);
            location.reload(true)
            resolve();
          }
        }).catch(response => {
          console.log("Error while requesting new token", response);
          reject(response);
        });
    })
    return promise
  }
}
