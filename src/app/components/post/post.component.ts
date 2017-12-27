import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { post } from 'selenium-webdriver/http';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts = null;
  currentUser = null;

  constructor(private postS: PostService, private authS: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authS.currentUser();
    this.postS.getPosts()
      .then(posts => {
        this.posts = posts;
      })
      .catch(err => {
        console.log(err);
       })
  }

}
