import { EventEmitter } from "@angular/core";

export class AuthService {
  private isLoggedIn: boolean = sessionStorage.getItem('userName') ? true: false;

  countryChangeEvent: EventEmitter<string> = new EventEmitter();


  login(userName: string) {
    this.isLoggedIn = true;
    sessionStorage.setItem('userName',userName);
  }

  logout() {
    sessionStorage.removeItem('userName');
    this.isLoggedIn = false;
  }

  getLoginStatus(){
    return this.isLoggedIn; 
  }
  getLoggedInUserName(){
    return sessionStorage.getItem('userName')
  }

}