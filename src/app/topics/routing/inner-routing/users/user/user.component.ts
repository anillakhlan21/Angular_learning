import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../users.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;
  constructor(
    private _route: Router,
    private _activateRoute: ActivatedRoute,
    private _userService: UserService
  ) {
    // this.user = <IUser>this._route.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    let userId: string = this._activateRoute.snapshot.params.id;
    this.user = this._userService.users.find((user: IUser)=> {
      return user.id === userId
     })!


    // this._activateRoute.params.subscribe((data)=>{
    //   let userId = data.id;
    //   // this.user = this._userService.users.find((user: IUser)=> user.id === userId)!
    //   this.user = this._userService.users.find((user: IUser)=> {
    //    return user.id === userId
    //   })!

    // })


  }

}
