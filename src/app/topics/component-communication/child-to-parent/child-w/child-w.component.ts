import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-w',
  templateUrl: './child-w.component.html',
  styleUrls: ['./child-w.component.css']
})
export class ChildWComponent implements OnInit {
  detail: string=''
  constructor() { }

  ngOnInit(): void {
  }

}
