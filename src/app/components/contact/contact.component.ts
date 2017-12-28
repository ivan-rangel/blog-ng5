import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/statics/contact/contact.service';
import { AuthService } from '../../services/auth/auth.service';

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

  constructor(private contactS: ContactService, private authS: AuthService) { }

  ngOnInit() {
    if (this.authS.isLoggedIn()) {
      this.currentUser = this.authS.currentUser();
      this.contact.firstName = this.currentUser.firstName
      this.contact.lastName = this.currentUser.lastName
      this.contact.email = this.currentUser.email
    }
  }
  public sendContact() {
    this.contactS.sendContact(this.contact)
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
