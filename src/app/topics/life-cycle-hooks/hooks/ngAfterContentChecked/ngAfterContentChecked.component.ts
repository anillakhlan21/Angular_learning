import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngAfteContentChecked',
  templateUrl: './ngAfterContentChecked.component.html',
  styleUrls: ['./ngAfterContentChecked.component.css']
})
export class NgAfteContentCheckedComponent implements OnInit {
  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }


}
