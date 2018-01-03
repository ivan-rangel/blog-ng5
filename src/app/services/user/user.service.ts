import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  apiURL = 'http://local.blog.com:8080/api/v1/users';

  constructor(private http: HttpClient) { }

  public getUsers() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiURL).toPromise()
        .then(res => {
          resolve(res)
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise
  }

  public delete(userId) {
    let promise = new Promise((resolve, reject) => {
      this.http.delete(`${this.apiURL}/${userId}`).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }
  public update(user) {
    let promise = new Promise((resolve, reject) => {
      this.http.patch(`${this.apiURL}`, user).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          console.log(res);
          reject(res)
        })
    })
    return promise;
  }

}
