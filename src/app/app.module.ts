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
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FileUploadModule } from 'ng2-file-upload';
// import { NgxEditorModule } from 'ngx-editor';
import { CKEditorModule } from 'ng2-ckeditor';



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
import { PagesMainComponent } from './components/admin/pages/pages-main/pages-main.component';

//services
import { AuthService } from './services/auth/auth.service';
import { PostService } from './services/post/post.service';
import { PagesService } from './services/statics/pages.service';
import { UserService } from './services/user/user.service';

//Pipes
import { SliceStringPipe } from './pipes/slice-string/slice-string.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

//Http Interceptor
import { MyHttpLogInterceptor } from './classes/interceptor';
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitize-html.pipe';

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
    FooterComponent,
    PagesMainComponent,
    CapitalizePipe,
    SanitizeHtmlPipe
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
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    FileUploadModule,
    // NgxEditorModule
    CKEditorModule
  ],
  providers: [
    AuthService,
    PostService,
    PagesService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
