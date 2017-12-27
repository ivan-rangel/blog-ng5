import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private authS: AuthService, private router: Router) { }

  ngOnInit() {
    
    if (!this.authS.isLoggedIn()) {
      return this.router.navigate(['']);
    }
    this.currentUser = this.authS.currentUser()
  }

}
