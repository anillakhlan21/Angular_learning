import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styleUrls: ['./key-value-pipe.component.css']
})
export class KeyValuePipeComponent implements OnInit {
  object = {
    studentName: "Anil",
    fatherName: "Rajpal Singh",
    motherName: "Sunita Devi",
    dateOfBirth: "2000-02-15",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
