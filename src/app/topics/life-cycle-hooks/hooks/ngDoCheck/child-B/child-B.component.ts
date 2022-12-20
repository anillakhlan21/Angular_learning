import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-B',
  templateUrl: './child-B.component.html',
  styleUrls: ['./child-B.component.css']
})
export class ChildBComponent implements OnInit,DoCheck {
  @Input() userInfo: any
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("%c ngDoCheck called", "color:green", this.userInfo)
  }

}
