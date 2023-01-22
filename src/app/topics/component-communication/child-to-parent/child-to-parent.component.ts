import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ChildYComponent } from './child-y/child-y.component';
import { ChildWComponent } from './child-w/child-w.component';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
  data: string='';
  dataUsingViewChild: string =''
  @ViewChild('child') child: ChildWComponent;
  constructor() { }

  ngOnInit(): void {
  }
  commentReceived(userData: any){
    this.data = userData;
  }


}
