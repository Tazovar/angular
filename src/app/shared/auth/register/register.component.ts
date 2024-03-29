import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/core/interfaces/auth/auth';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _authservie:AuthService){}
userObject:Register = {
  username:'',
  password:'',
  confirmPassword:''
}
  register(form:NgForm){
    let newObject = {...this.userObject}
     this._authservie.onRegisterBtnClick(newObject)
  }
}
