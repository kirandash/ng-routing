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

### 2.2 Passing route parameters
{ path: 'details/:id/:name', component: DetailsComponent }
this.activatedRoutes.params.subscribe(parameters => {
    this.id = parameters.id;
    this.name = parameters.name;
    this.foo = parameters.foo;
    this.me = parameters.me;
});
<a [routerLink]="['details', '1', 'kiran']">child 1</a>
<a [routerLink]="['details', '1', 'kiran', {foo: 'test', me: 'test2'}]">child 1 with optional params</a>
navigate() {
    this.router.navigate(['details', '2', 'mama']);
}
navigateOptional() {
    this.router.navigate(['details', '2', 'mama', {foo: 'test 2', me: 'kkk 2'}]);
}