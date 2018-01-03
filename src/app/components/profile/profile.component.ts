import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { PostService } from '../../services/post/post.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://local.blog.com:8080/api/v1/users/profile-img';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  posts
  editableUser
  profileURL = 'http://local.blog.com:8080/profile_imgs/'


  constructor(
    private authS: AuthService,
    private router: Router,
    private postS: PostService,
    private userS: UserService
  ) { }

  ngOnInit() {

    if (!this.authS.isLoggedIn()) {
      return this.router.navigate(['']);
    }
    this.currentUser = this.authS.currentUser()
    this.editableUser = this.currentUser
    this.getUsersPosts(this.currentUser._id);

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let res = JSON.parse(response);
      this.editableUser['profileImage'] = res.filename;
      this.updateUserInfo(this.editableUser)
    };

  }
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'profile' });

  private getUsersPosts(userId) {
    this.postS.getPostByUser(userId)
      .then(res => {
        this.posts = res;
      })
      .catch(res => {
        console.log(res);
      })
  }
  private updateUserInfo(user) {
    this.userS.update(user)
      .then(res => {
        this.authS.getNewToken()
          .then(() => {
            this.ngOnInit();
          })
      })
      .catch(res => {
        console.log(res);
      })
  }


}
