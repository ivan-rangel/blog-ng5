import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts
  constructor(private postS: PostService) { }

  ngOnInit() {
    this.postS.getPosts()
      .then(data => {
        this.posts = data;
      })
      .catch(data => {
        console.log(data);
      })
  }

  private featurePost(postId) {
    this.postS.feature(postId)
      .then(res => {
        alert('Post updated')
        this.ngOnInit();
      })
      .catch(res => {
        console.log(res);
      })
  }
  private shownPost(postId) {
    this.postS.shown(postId)
      .then(res => {
        alert('Post updated')
        this.ngOnInit();
      })
      .catch(res => {
        console.log(res);
      })
  }

  private deletePost(postId) {
    this.postS.delete(postId)
      .then(res => {
        alert('Post deleted')
        this.ngOnInit();
      })
      .catch(res => {
        console.log(res);
      })
  }
}
