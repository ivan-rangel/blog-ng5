import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentUser = null;

  constructor(private authS: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authS.currentUser();
    if (Object.keys(this.currentUser).length) {
      this.isLoggedIn = this.authS.isLoggedIn();
    }
  }

  public logOut() {
    this.authS.logout()
  }

}
