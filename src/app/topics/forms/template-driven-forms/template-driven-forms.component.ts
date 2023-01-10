import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

interface IUser {
  firstname: string,
  lastname: string,
  email: string,
  gender: "male" | "female",
  isMarried: boolean,
  country: number,
  address: {
    city: string,
    street: string,
    pincode: number
  }
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent implements OnInit {

 @ViewChild('userTemplateRefForm',{static: true}) userTemplateRefForm!: NgForm;
  user1! : IUser;

  user: IUser = {
    firstname: "Sachin",
    lastname: "Tendulkar",
    email: "sachin@gmail.com",
    gender: "male",
    isMarried: true,
    country: 1,
    address: {
      city: "Mumbai",
      street: "Fashin Street",
      pincode: 40060
    }
  }

  countryList: { name: string; id: number }[] = [
    { id: 1, name: 'India' },
    { id: 2, name: 'China' },
    { id: 3, name: 'United States' },
  ];


  constructor() { }

  ngOnInit(): void {
    this.user1 = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: 2,
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: 400050
      }
    };

   }


   setDefaultValue(){
    this.userTemplateRefForm.setValue(this.user1);
console.log(this.userTemplateRefForm.controls);

    // this.userTemplateRefForm.controls['firstname'].setValue("Anil");
    // this.userTemplateRefForm.controls['lastname'].setValue("Lakhlan");
    // this.userTemplateRefForm.controls['email'].setValue("anil@gmail.com");
    // this.userTemplateRefForm.controls['gender'].setValue("male");
    // this.userTemplateRefForm.controls['isMarried'].setValue(false);
    // this.userTemplateRefForm.controls['country'].setValue(1);
    // this.userTemplateRefForm.controls['address'].setValue(this.user.address)

    console.log(this.userTemplateRefForm)
   }

  onSubmitForm(userForm: NgForm) {
    console.log(userForm);
  }

  reset(form: NgForm){
    form.resetForm();
  }
  patch(){
    let obj = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };

    this.userTemplateRefForm.control.patchValue(obj)
  }

 changeAddress(){
  let obj = {
    city: "Bangalore",
    street: "Brigade Road",
    pincode: "600100"
  };
  // let address= this.userTemplateRefForm.controls["address"] as FormGroup
   (<FormGroup>this.userTemplateRefForm.controls["address"]).patchValue(obj)

  // address.patchValue(obj);
 }
}


