import { AfterContentChecked, AfterViewChecked, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ngAfterViewChecked',
  templateUrl: './ngAfterViewChecked.component.html',
  styleUrls: ['./ngAfterViewChecked.component.css']
})
export class NgAfterViewCheckedComponent implements OnInit, AfterViewChecked {
  counter: number = 0;
  @ViewChild('para') paraEl!: ElementRef;
  @ViewChildren('heading, para') multipleEls!: QueryList<ElementRef>;
  constructor() { }

  ngOnInit() {
  }
  incrementCounter(){
    this.counter++;
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("%c ngAfterViewChecked is called","color:green",this.paraEl)
    console.log("%c ngAfterViewChecked is called","color:green",this.multipleEls)

  }
}
