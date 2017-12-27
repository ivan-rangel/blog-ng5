import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {}

  constructor(private router: Router, private authS: AuthService) { }
  ngOnInit() {
    if (this.authS.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  logIn() {
    this.authS.login(this.user)
      .then(() => {
        location.reload()
      })
  }

}
