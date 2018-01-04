import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pills = [
    {
      name: 'Users',
      path: 'users'
    },
    {
      name: 'Posts',
      path: 'posts'
    },
    {
      name: 'Pages',
      path: 'pages'
    },
  ]
  constructor(
    private router: Router,
    private authS: AuthService
  ) { }

  ngOnInit() {
    if (this.authS.currentUser()['userType'] !== 'admin')
      return this.router.navigate([``]);

    this.router.navigate([`admin/users`]);
  }

  private goTo(path) {
    this.router.navigate([`admin/${path}`]);
  }

}
