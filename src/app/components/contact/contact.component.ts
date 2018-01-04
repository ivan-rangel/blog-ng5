import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { PagesService } from '../../services/statics/pages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = {
    firstName: null,
    lastName: null,
    email: null,
    message: null,
  }
  currentUser
  page = {
    content: [],
    name: String,
  }

  constructor(private pageS: PagesService, private authS: AuthService) { }

  ngOnInit() {
    this.pageS.getPage('contact')
      .then(res => {
        this.page.content = res['content']
        this.page.name = res['name']        
      })
      .catch(res => {
        console.log(res);
      })
    if (this.authS.isLoggedIn()) {
      this.currentUser = this.authS.currentUser();
      this.contact.firstName = this.currentUser.firstName
      this.contact.lastName = this.currentUser.lastName
      this.contact.email = this.currentUser.email
    }
  }
  public sendContact() {
    this.pageS.sendContact(this.contact)
      .then(() => {
        alert('Message sent to the admin')
        this.contact = {
          firstName: null,
          lastName: null,
          email: null,
          message: null,
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Error sending the message')
      })
  }

}
