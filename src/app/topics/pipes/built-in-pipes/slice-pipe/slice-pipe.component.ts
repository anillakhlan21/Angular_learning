import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice-pipe',
  templateUrl: './slice-pipe.component.html',
  styleUrls: ['./slice-pipe.component.css']
})
export class SlicePipeComponent implements OnInit {
  msg: string= 'Welcome to Angular';
  collection: string[] = ['a', 'b', 'c', 'd'];
  constructor() { }

  ngOnInit(): void {
  }

}
