import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this._auth.logout();
    this._router.navigateByUrl('/');
    
  }

}
