import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users

  constructor(private userS: UserService) { }

  ngOnInit() {
    this.userS.getUsers()
      .then(data => {
        this.users = data;
      })
      .catch(data => {
        console.log(data);
      })
  }

  private deleteUser(userId) {
    this.userS.delete(userId)
      .then(res => {
        alert('User deleted')
        this.ngOnInit();
      })
      .catch(res => {
        console.log(res);
      })
  }

}
