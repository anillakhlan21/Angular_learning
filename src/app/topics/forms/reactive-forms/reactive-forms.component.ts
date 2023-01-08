import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  contactForm1: FormGroup;
  contactForm2: FormGroup;
  contactForm3: FormGroup;
  countryList: { name: string; id: number }[] = [
    { id: 1, name: 'India' },
    { id: 2, name: 'China' },
    { id: 3, name: 'United States' },
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm1 = new FormGroup({
      //Setting Default value as string
      firstname: new FormControl('Anil'),
      //Setting Default value & disabled state as object
      lastname: new FormControl({ value: 'Lakhlan', disabled: true },),
      // Sync Validator
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email]),
      gender: new FormControl('male'),
      isMarried: new FormControl(false),
      country: new FormControl(1)
    })

    this.contactForm2 = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      isMarried: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode: new FormControl(),
        country: new FormControl(),
      })
    })

    this.contactForm3 = this.formBuilder.group({
      firstname: this.formBuilder.control(''),
      lastname: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      isMarried: this.formBuilder.control(''),
      country: this.formBuilder.control(''),
      address: this.formBuilder.group({
        city: this.formBuilder.control(''),
        street: this.formBuilder.control(''),
        pincode: this.formBuilder.control(''),
      })
    });

this.contactForm3.get("firstname")?.valueChanges.subscribe(selectedValue => {
  console.log('firstname value changed')
  console.log(selectedValue)
  console.log(this.contactForm3.get("firstname")?.value)
  console.log(this.contactForm3.value)   //still shows the old first name
})

  }


  setDefault() {
    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };
    this.contactForm3.setValue(contact);
  }

  setAddress() {

    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070",
      country: "1"
    };

    this.contactForm3.get("address")?.setValue(address);

  };

  setCountry() {

    this.contactForm3.get("country")?.setValue("1");

  };

  patchAddress() {

    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      //pincode: "600070",
    };

    this.contactForm3.get("address")?.patchValue(address);

  }

  patchName() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
    }

    this.contactForm3.patchValue(contact);

  }

  reset() {
    this.contactForm3.reset();
  }


  onSubmit(formNumber: number) {
    switch(formNumber){
      case 1:
        console.log(this.contactForm1);
        break;
      case 2:
        console.log(this.contactForm2);
        break;
      case 3:
        console.log(this.contactForm3);
    }
  }

  getEmail() {
    return this.contactForm3.get('email');
  }

}
