import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localeEn);
@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css'],
})
export class DatePipeComponent implements OnInit {
  toDate: Date = new Date('04/06/2020 13:05:09');
  constructor() { }

  ngOnInit(): void {
  }

}
