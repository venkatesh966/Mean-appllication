import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';


var users = [
  new UsersComponent('venkatesh','venki')
];

@Injectable()
export class LoginService {

  constructor(private _router: Router) { }
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/']);
  }

  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username);
      this._router.navigate(['/welcome']);
      return true;
    }
    return false;
  }

  
}

