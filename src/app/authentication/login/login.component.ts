import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private _auth: AuthService
    ) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      userName: this._fb.control('',Validators.required),
      password: this._fb.control('', Validators.required)
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this._route.navigateByUrl('/dashboard');
      // this._route.navigate(['/dashboard'])
      this._auth.login(this.loginForm.get('userName')?.value);
    }
  }


}
