import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngOnInit',
  templateUrl: './ngOnInit.component.html',
  styleUrls: ['./ngOnInit.component.css']
})
export class NgOnInitComponent implements OnInit {
  constructor() {
    console.log("%c constructor is called","color:green")
  }

  ngOnInit() {
    console.log("%c ngOnInit is called","color:green")
  }

}
