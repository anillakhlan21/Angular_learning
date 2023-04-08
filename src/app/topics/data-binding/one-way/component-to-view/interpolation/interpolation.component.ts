import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  msg: string = 'Innertext of an element from component using string interpolation'
  constructor() { }

  ngOnInit(): void {
  }

}
