import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case-pipe',
  templateUrl: './title-case-pipe.component.html',
  styleUrls: ['./title-case-pipe.component.css']
})
export class TitleCasePipeComponent implements OnInit {
    title: string = 'title with multiple words';
  constructor() { }

  ngOnInit(): void {
  }

}
