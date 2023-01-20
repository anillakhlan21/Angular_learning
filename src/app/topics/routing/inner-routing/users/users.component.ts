import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export interface IUser{
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  mobile_number: string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]=[];
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = this._userService.users;
  }

  onClickOnUser(user: IUser){
    this._router.navigate(['../','user',user.id],{state: {...user}, relativeTo: this._activatedRoute})
  }
}
