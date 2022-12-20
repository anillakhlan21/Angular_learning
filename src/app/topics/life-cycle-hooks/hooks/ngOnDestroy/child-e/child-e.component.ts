import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-e',
  templateUrl: './child-e.component.html',
  styleUrls: ['./child-e.component.css']
})
export class ChildEComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("%c Child-E: ngOnInit is called", "color:green")
  }

  ngOnDestroy(): void {
      console.log("%c Child-e component is destoryed","color:red");
  }

}
