import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-q',
  templateUrl: './child-q.component.html',
  styleUrls: ['./child-q.component.css']
})
export class ChildQComponent implements OnInit {
  @Input() detail: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
