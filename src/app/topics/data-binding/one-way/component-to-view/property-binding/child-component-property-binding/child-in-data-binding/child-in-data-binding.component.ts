import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-in-data-binding',
  templateUrl: './child-in-data-binding.component.html',
  styleUrls: ['./child-in-data-binding.component.css']
})
export class ChildInDataBindingComponent implements OnInit {
  @Input('comment') msg: string;
  constructor() { }

  ngOnInit(): void {
  }

}
