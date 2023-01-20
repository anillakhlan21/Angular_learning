import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnInit {
  @ViewChild('template1') template1: any;
  @ViewChild('template2') template2: any

  selectedTemplate;

  constructor() {
    this.selectedTemplate = this.template1;
  }
  ngOnInit(): void {}

  changeTemplate() {
    this.selectedTemplate = this.selectedTemplate == this.template1 ? this.template2 : this.template1;
  }

}
