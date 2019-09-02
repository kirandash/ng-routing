import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

// Setting route for application
const routeConstants : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // empty url with redirect
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'details/:id/:name', component: DetailsComponent }, // id and name are params
  { path: '**', component: NotFoundComponent } // wild card 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    NotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConstants) // forRoot since this router is available at application level
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
