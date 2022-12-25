import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case-directive',
  templateUrl: './ng-switch-case-directive.component.html',
  styleUrls: ['./ng-switch-case-directive.component.css']
})
export class NgSwitchCaseDirectiveComponent implements OnInit {
  items: any[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 3}, {name: 'Five', val: 3}];
  selectedValue1: string= 'One';
  selectedValue2: string= 'One';
  selectedValue3: string= 'One';
  selectedValue4: string= 'One';
  constructor() { }

  ngOnInit(): void {
  }
}
