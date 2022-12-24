import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-directive',
  templateUrl: './ng-model-directive.component.html',
  styleUrls: ['./ng-model-directive.component.css']
})
export class NgModelDirectiveComponent implements OnInit {
  name: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
