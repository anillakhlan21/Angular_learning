import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-property-binding',
  templateUrl: './child-component-property-binding.component.html',
  styleUrls: ['./child-component-property-binding.component.css']
})
export class ChildComponentPropertyBindingComponent implements OnInit {
  review = "Hi, I'm message from parent component sent to child component via property binding and child accessed me via @Input()"
  constructor() { }

  ngOnInit(): void {
  }

}
