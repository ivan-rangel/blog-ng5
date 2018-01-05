import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  apiURL = 'http://ec2-52-52-125-241.us-west-1.compute.amazonaws.com/api/v1/posts';

  constructor(private http: HttpClient) { }

  public getPosts() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiURL).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }

  public getPost(postId) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/${postId}`).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }
  public getPostByUser(userId) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/userId/${userId}`).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
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

  public feature(postId) {
    let promise = new Promise((resolve, reject) => {
      this.http.patch(`${this.apiURL}/featured`, { postId: postId }).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }

  public shown(postId) {
    let promise = new Promise((resolve, reject) => {
      this.http.patch(`${this.apiURL}/shown`, { postId: postId }).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }

  public delete(postId) {
    let promise = new Promise((resolve, reject) => {
      this.http.delete(`${this.apiURL}/${postId}`).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res)
        })
    })
    return promise;
  }
}
