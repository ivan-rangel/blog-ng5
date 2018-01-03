//Core depencencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//npm depencencies
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FileUploadModule } from 'ng2-file-upload';


//components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { PostsComponent } from './components/admin/posts/posts.component';
import { FooterComponent } from './components/footer/footer.component';

//services
import { AuthService } from './services/auth/auth.service';
import { PostService } from './services/post/post.service';
import { ContactService } from './services/statics/contact/contact.service';
import { UserService } from './services/user/user.service';

//Pipes
import { SliceStringPipe } from './pipes/slice-string.pipe';

//Http Interceptor
import { MyHttpLogInterceptor } from './classes/interceptor';

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
    ProfileComponent,
    DashboardComponent,
    UsersComponent,
    PostsComponent,
    SliceStringPipe,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    AngularFontAwesomeModule,
    FileUploadModule
  ],
  providers: [
    AuthService,
    PostService,
    ContactService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
