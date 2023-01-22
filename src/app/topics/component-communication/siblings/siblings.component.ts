import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildPComponent } from './child-p/child-p.component';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.css']
})
export class SiblingsComponent implements OnInit {
  @ViewChild('child_p') child_p: ChildPComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
