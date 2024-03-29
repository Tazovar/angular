import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/core/interfaces/auth/auth';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _authservie:AuthService){}
userObject:Login = {
  username:'',
  password:'',
}
  Login(form:NgForm){
    let newObject = {...this.userObject}
     this._authservie.onLoginBtnClick(newObject)

  }
}
