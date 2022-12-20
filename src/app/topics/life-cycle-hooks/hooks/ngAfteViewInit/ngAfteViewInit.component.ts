import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngAfteViewInit',
  templateUrl: './ngAfteViewInit.component.html',
  styleUrls: ['./ngAfteViewInit.component.css']
})
export class NgAfteViewInitComponent implements OnInit, AfterViewInit{
  @ViewChild('para') para!: ElementRef<HTMLParagraphElement>
  constructor() { }

  ngOnInit() {
    console.log(this.para)
  }

  ngAfterViewInit(): void {
      console.log("%c Inside ngAfterViewInit","color:green",this.para);
  }


}
