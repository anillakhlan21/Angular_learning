import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  templateUrl: './ng-style-directive.component.html',
  styleUrls: ['./ng-style-directive.component.css']
})
export class NgStyleDirectiveComponent implements OnInit {
  color: string= 'red';
  isError: boolean = false;
  size: number = 10;
  styleClass: StyleClass = new StyleClass();
  constructor() { }

  ngOnInit(): void {
  }

}

class StyleClass {
  'color': string= 'blue';
  'font-size.px': number= 20;
  'font-weight': string= 'bold';
}
