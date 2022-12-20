import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngOnChanges',
  templateUrl: './ngOnChanges.component.html',
  styleUrls: ['./ngOnChanges.component.css']
})
export class NgOnChangesComponent implements OnInit {
  userName: string = '';

  parentsInformation: {
    fatherName: string,
    motherName: string
  } = {
      fatherName: '',
      motherName: ''
    }
  constructor() { }

  ngOnInit() {
  }

}
