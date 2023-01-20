import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDeactivateComponent } from '../services/deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, IDeactivateComponent {

  userForm: FormGroup;
  viewMode = true; // toggle to show/hide form fields

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

  }

  toggleViewMode() {
    this.viewMode = !this.viewMode;
  }

  canExit(){
    if(!this.viewMode && this.userForm.dirty){
      return confirm('Are you sure you want to exit');
    }
    return true;
  }

  onSubmit() {
    if(!this.viewMode){
    sessionStorage.setItem('name',this.userForm.get('name')?.value);
    sessionStorage.setItem('email',this.userForm.get('email')?.value);
    }
    this.toggleViewMode()
  }

}
