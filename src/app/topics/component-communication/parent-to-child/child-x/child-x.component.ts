import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-x',
  templateUrl: './child-x.component.html',
  styleUrls: ['./child-x.component.css']
})
export class ChildXComponent implements OnInit {
  @Input() userData: string;
  constructor() { }

  ngOnInit(): void {
  }

}
