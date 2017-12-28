import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  apiURL = 'http://local.blog.com:8080/api/v1/posts';

  constructor(private http: Http) { }

  public getPosts() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiURL).toPromise()
        .then(res => {
          let data = res.json();
          resolve(data);
        })
        .catch(res => {
          let data = res.json();
          reject(data)
        })
    })
    return promise;
  }

  public getPost(postId) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/${postId}`).toPromise()
        .then(res => {
          let data = res.json();
          resolve(data);
        })
        .catch(res => {
          let data = res.json();
          reject(data)
        })
    })
    return promise;
  }

  public create(post) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.apiURL, post).toPromise()
        .then(res => {
          resolve();
        })
        .catch(res => {
          reject()
        })
    })
    return promise;
  }
}
