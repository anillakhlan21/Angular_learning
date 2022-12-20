import { AfterContentChecked, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-child-d',
  templateUrl: './child-d.component.html',
  styleUrls: ['./child-d.component.css']
})
export class ChildDComponent implements OnInit,AfterContentChecked {
  @ContentChild('header') headerEl!: ElementRef<HTMLHeadingElement>
  @ContentChildren('header, main, footer') projectedContent!: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
      console.log('%c ngAfterContentChecked is called','color:green', this.headerEl);
      console.log('%c ngAfterContentChecked is called ${this.projectedContent}', 'color:green', this.projectedContent);
  }

}
