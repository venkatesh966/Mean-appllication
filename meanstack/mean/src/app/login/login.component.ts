import { Component } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent {
  public user = new UsersComponent('','');
  public errorMsg = '';

  constructor(private _service:LoginService) { }

  login() {
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }
}
