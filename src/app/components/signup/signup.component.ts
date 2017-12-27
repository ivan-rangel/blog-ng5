import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConf: ''
  }

  constructor(private router: Router, private authS: AuthService) { }

  ngOnInit() {
    if (this.authS.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  signUp() {
    if (this.user.password !== this.user.passwordConf){
      alert(`Passwords don't match`)
      return
    }
      this.authS.signUp(this.user)
        .then(() => {
          location.reload()
        })
  }

}
