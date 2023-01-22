import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IRandomData } from 'src/app/interfaces/randomData.interface';
import { ISport } from 'src/app/interfaces/sports.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  randomData: IRandomData[];
  sports: ISport;
  customersList: any[];
  customerForm: FormGroup;
  createMode: boolean = true;
  selectedCustomerIdForEdit: string

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      officialName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      billingAddress: new FormControl('', [Validators.required]),
      shippingAddress: new FormControl('', [Validators.required])
    })

    this.getRandomData()
    this.getSports();
    this.getCustomers()
  }


  getRandomData() {
    this.httpService.getRandomData().subscribe((data) => {
      this.randomData = data.slice(0, 10);
    })
  }

  getSports() {
    this.httpService.getSports('london').subscribe((data: any) => {
      this.sports = data;
    })
  }

  fillForm(customer: any) {
    this.createMode = false; 
    this.selectedCustomerIdForEdit = customer.customerId;
    this.customerForm.patchValue(customer);
  }

  

  //customer API call
  getCustomers() {
    this.httpService.getAllCustomers('b5479be0-3157-47fd-bedb-2074916be377').subscribe((res) => {
      this.customersList = res.data
    })
  }

 

  onDelete(customerId: string){
    this.httpService.deleteCustomer('b5479be0-3157-47fd-bedb-2074916be377', customerId).subscribe((res)=>{
      console.log('successfully deleted');
      this.getCustomers()
    },
    (err)=>{
      console.log(err)
    })
  }

  onSubmit(){
    
    let clientId: string = 'b3caf465-235a-4d15-a99d-ffbff5f24552';
    let registration_no= '123';
    let dun_number = '3435';
    let sla_unmet_condition= 'First Response';
    let members:any[] =[];
    let departments: any[] = []
    let body = {...this.customerForm.value, clientId, registration_no, dun_number, sla_unmet_condition, members,departments };
    
    if(this.createMode){
      this.httpService.createCustomer('b5479be0-3157-47fd-bedb-2074916be377',body).subscribe((res)=>{
        console.log('successfully created a customer');
        this.getCustomers();
      })
    }else{
      this.httpService.updateCustomer('b5479be0-3157-47fd-bedb-2074916be377', this.selectedCustomerIdForEdit, body).subscribe((res)=>{
        console.log('successfully update customer')
        this.createMode = true;
        this.getCustomers();
      },(err)=>{
        console.log('error updating customer');
      })
    }
   }

}
