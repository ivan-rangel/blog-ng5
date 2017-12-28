import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
  apiURL = 'http://local.blog.com:8080/api/v1/contact';

  constructor(private http: Http) { }

  public sendContact(contact) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.apiURL, contact).toPromise()
        .then(res => {
          resolve()
        })
        .catch(res => {
          let data = res.json();
          reject(data)
        })
    })
    return promise;
  }
}
