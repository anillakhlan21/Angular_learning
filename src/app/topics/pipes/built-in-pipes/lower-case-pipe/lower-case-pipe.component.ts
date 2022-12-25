import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-case-pipe',
  templateUrl: './lower-case-pipe.component.html',
  styleUrls: ['./lower-case-pipe.component.css']
})
export class LowerCasePipeComponent implements OnInit {
  msg: string= 'Welcome to Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
