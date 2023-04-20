import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  flag:boolean= false;
  cssVar: string = 'primary big';
  cssArray = ['primary', 'big'];
  cssClass = {
    primary: true,
    big: true,
  };
  numbers = [30, 40, 50, 60, 70, 80];
  constructor() { }

  ngOnInit(): void {
  }

  getClass(num: number) {
    if (num <= 50) return 'primary';
    else return 'secondary';
  }

}
