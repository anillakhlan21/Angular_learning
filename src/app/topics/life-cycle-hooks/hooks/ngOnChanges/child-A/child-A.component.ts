import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-A',
  templateUrl: './child-A.component.html',
  styleUrls: ['./child-A.component.css']
})
export class ChildAComponent implements OnChanges {
  @Input() name: string = '';
  @Input() parentInfo: {
    fatherName: string;
    motherName: string;
  } = {
      fatherName: '',
      motherName: ''
    }
  constructor() {
    console.log("%c constructor is called", "color:green")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("%c ngOnChanges called", "color:green", changes);
  }
  


}
