import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  color: string= 'red';
  size: number =10;
  status: string = 'error';

styleObj= {
    'color': 'blue',
    'font-size.px': 20,
    'font-weight': 'bold' 
 }

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    if(this.status=='error'){
      this.status = 'OK'
    }else{
      this.status= 'error'
    }
  }

}
