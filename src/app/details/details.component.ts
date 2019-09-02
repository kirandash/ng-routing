import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string;
  name: string;
  foo: string;
  me: string;
  constructor(public activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(parameters => {
      this.id = parameters.id;
      this.name = parameters.name;
      this.foo = parameters.foo;
      this.me = parameters.me;
    });
  }

}
