import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  templateUrl: './ng-class-directive.component.html',
  styleUrls: ['./ng-class-directive.component.css']
})
export class NgClassDirectiveComponent implements OnInit {
  cssStringVar: string= 'red size20';
  cssArray:string[]=['red','size20'];
  cssClass: CssClass = new CssClass();
  obj = {
    red: true,
    size20: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}

class CssClass {
  red: boolean= true;
  size20: boolean= true;
}
