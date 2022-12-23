import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit {
condition1: boolean = true;
condition2: boolean = true;
condition3: boolean = true;
condition4: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
