import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-y',
  templateUrl: './child-y.component.html',
  styleUrls: ['./child-y.component.css']
})
export class ChildYComponent implements OnInit {
  comment: string='';
 @Output() dataEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    this.dataEvent.emit(this.comment)
  }

  

}
