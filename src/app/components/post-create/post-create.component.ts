import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  post= {
    title:'',
    body:'',
    author:''
  };
  user: any;
  constructor(private router: Router,
    private postS: PostService,
    private authS: AuthService) { }

  ngOnInit() {
    this.user = this.authS.currentUser();
    if (this.user._id) {
      this.post.author = this.user._id;
    }

  }

  public createPost() {
    this.postS.create(this.post)
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
