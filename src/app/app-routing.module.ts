import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostComponent } from './components/post/post.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { PostsComponent } from './components/admin/posts/posts.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'fb-login/:token',
        component: LoginComponent,        
    },
    {
        path: 'signup',
        component: SignupComponent,
        pathMatch: 'full'
    },
    {
        path: 'post-create',
        component: PostCreateComponent,
        pathMatch: 'full'
    },
    {
        path: 'post/:postId',
        component: PostComponent        
    },
    {
        path: 'contact',
        component: ContactComponent        
    },
    {
        path: 'profile',
        component: ProfileComponent        
    },
    {
        path: 'admin',
        component: DashboardComponent        
    },
    {
        path: 'admin/users',
        component: UsersComponent        
    },
    {
        path: 'admin/posts',
        component: PostsComponent        
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}