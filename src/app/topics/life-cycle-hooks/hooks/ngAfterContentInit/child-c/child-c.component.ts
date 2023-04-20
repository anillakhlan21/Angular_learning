import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit,AfterContentInit {
  @ContentChild('header') headerEl!: ElementRef<HTMLHeadingElement>
  @ContentChildren('header, main, footer') projectedContent!: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("%c ngAfteContentInit is called", "color:green", this.headerEl.nativeElement.innerText)
    this.projectedContent.forEach((e)=>{
      console.log("%c ngAfteContentInit is called", "color:green",e.nativeElement.innerText)
    })
  }

}
