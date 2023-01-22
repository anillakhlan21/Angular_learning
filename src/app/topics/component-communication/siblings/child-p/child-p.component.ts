import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-p',
  templateUrl: './child-p.component.html',
  styleUrls: ['./child-p.component.css']
})
export class ChildPComponent implements OnInit {
  
  studentsDetail: string ='';
  constructor() { }
  

  ngOnInit(): void {
  }

}
