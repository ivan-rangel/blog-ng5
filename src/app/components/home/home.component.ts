import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { PagesService } from '../../services/statics/pages.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = null;
  currentUser = null;
  page = {
    content: [],
    name: String
  }
  constructor(
    private postS: PostService,
    private pageS: PagesService,
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageS.getPage('home')
      .then(res => {
        this.page.content = res['content']
        this.page.name = res['name']
      })
      .catch(res => {
        console.log(res);
      })
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
