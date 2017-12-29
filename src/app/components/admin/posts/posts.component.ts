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
    console.log(postId);
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
    console.log(postId);
    this.postS.shown(postId)
      .then(res => {
        alert('Post updated')
        this.ngOnInit();
      })
      .catch(res => {
        console.log(res);
      })
  }
}
