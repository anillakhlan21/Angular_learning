import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.css']
})
export class PercentPipeComponent implements OnInit {
  a: number = 0.259;
  b: number = 1.3495;
  constructor() { }

  ngOnInit(): void {
  }

}
