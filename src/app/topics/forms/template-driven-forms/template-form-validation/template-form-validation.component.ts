import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-validation',
  templateUrl: './template-form-validation.component.html',
  styleUrls: ['./template-form-validation.component.css']
})
export class TemplateFormValidationComponent implements OnInit {

  @ViewChild('contactForm') contactForm!: NgForm;
 
  contact!:contact;
 
  ngOnInit() {
 
    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };
 
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
}
 
export class contact {
  firstname!:string;
  lastname!:string;
  gender!:string;
  isToc!:boolean;
  email!:string;
} 
 
 