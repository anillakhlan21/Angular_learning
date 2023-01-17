export class AuthService {
  private isLoggedIn: boolean = false;
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getLoginStatus(){
    return this.isLoggedIn;
  }

}