import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-routing';

  constructor(private router: Router){

  }

  navigate() {
    this.router.navigate(['details', '2', 'mama']);
  }

  navigateOptional() {
    this.router.navigate(['details', '2', 'mama', {foo: 'test 2', me: 'kkk 2'}]); // anything in an object is optional
  }
}
