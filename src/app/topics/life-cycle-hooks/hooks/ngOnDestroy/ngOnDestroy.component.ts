import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngOnDestroy',
  templateUrl: './ngOnDestroy.component.html',
  styleUrls: ['./ngOnDestroy.component.css']
})
export class NgOnDestroyComponent implements OnInit {
  isUserDatailsVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
