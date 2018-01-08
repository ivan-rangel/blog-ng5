import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PagesService {

  apiURL = '/api/v1/pages';

  constructor(private http: HttpClient) { }


  public getPages() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiURL).toPromise()
        .then(res => {
          resolve(res)
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }

  public getPage(page) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/${page}`).toPromise()
        .then(res => {
          resolve(res)
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }

  public updatePage(page) {
    let promise = new Promise((resolve, reject) => {
      this.http.patch(this.apiURL, page).toPromise()
        .then(res => {
          resolve(res)
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }

  public sendContact(contact) {
    let apiURL = '/api/v1/contact';
    let promise = new Promise((resolve, reject) => {
      this.http.post(apiURL, contact).toPromise()
        .then(res => {
          resolve(res)
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }
}
