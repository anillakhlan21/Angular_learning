import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit,AfterViewInit {
  @ViewChild('para') paraEl: ElementRef;
  @ViewChild('para2') paraEl2: ElementRef;

  numItems: number=0;
  name: string=''
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.paraEl.nativeElement.style.fontSize ='40px';
  }

  onMouseEnter(){
    this.paraEl2.nativeElement.style.backgroundColor='yellow';
  }
onMouseExit(){
this.paraEl2.nativeElement.style.backgroundColor = 'red';
}

}
