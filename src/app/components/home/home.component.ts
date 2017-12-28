import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = null;
  currentUser = null;
  constructor(private postS: PostService, private authS: AuthService, private router: Router) { }

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

  private goPost(postId) { 
    this.router.navigate([`/post/${postId}`])
   }

}
