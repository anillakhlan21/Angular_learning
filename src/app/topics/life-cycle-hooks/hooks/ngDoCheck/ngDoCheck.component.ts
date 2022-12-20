import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngDoCheck',
  templateUrl: './ngDoCheck.component.html',
  styleUrls: ['./ngDoCheck.component.css']
})
export class NgDoCheckComponent implements OnInit {
  userInformation: {
    name: string
    DOB: string;
  } = {
    name : '',
    DOB : new Date().toISOString().slice(0,10)
  }
  constructor() { }

  ngOnInit() {
  }



}
