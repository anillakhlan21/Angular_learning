import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-attribute-directives',
  templateUrl: './custom-attribute-directives.component.html',
  styleUrls: ['./custom-attribute-directives.component.css']
})
export class CustomAttributeDirectivesComponent implements OnInit {
  zoomPercentageFist: number = 10;
  zoomPercentageSecond: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
