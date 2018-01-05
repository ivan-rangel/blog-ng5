import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  currentUser
  post
  constructor(private postS: PostService, private authS: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this.authS.currentUser();
    this.route.params.subscribe(params => {
      let postId = params.postId;
      this.postS.getPost(postId)
        .then(res => {
          this.post = res;
        })
        .catch(res => {
          console.log(res);
        })
    });
  }

}
