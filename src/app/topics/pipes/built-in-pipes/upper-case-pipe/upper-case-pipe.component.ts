import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-case-pipe',
  templateUrl: './upper-case-pipe.component.html',
  styleUrls: ['./upper-case-pipe.component.css']
})
export class UpperCasePipeComponent implements OnInit {
  msg: string= 'Welcome to Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
