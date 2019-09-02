# Angular Routing
## 1. Routing - Basics 
### 1.1 Intro
What is routing?
1. A way to load and manage your application
2. Map app function to the URL
3. Logical way to structure your application
Things to do:
1. Passing data
2. Route guards
3. Lazy loading

## 2. Router - Setup
const routeConstants : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '**', component: NotFoundComponent }
];
<router-outlet></router-outlet>
RouterModule.forRoot(routeConstants) 
<a routerLink="login" routerLinkActive="active">Login</a>