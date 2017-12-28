import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthService } from './services/auth/auth.service';
import { PostService } from './services/post/post.service';
import { ContactService } from './services/statics/contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PostComponent,
    PostCreateComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [AuthService, PostService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
