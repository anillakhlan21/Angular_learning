import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {
  isVisible: boolean = true;
  arr: string[]= ['rahul','rajesh', 'pinkesh','raj']
  constructor() { }
  count: number =5
  ngOnInit(): void {
  }

}
