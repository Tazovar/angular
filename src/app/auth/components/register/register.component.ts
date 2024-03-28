import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css',
    './../../css/auth.css'
  ]
})
export class RegisterComponent {
userObject:any = {
  email:'',
  password:'',
  confirmPassword:''
}

constructor(private authservice:AuthService) {}

submit():void{
let newUserObject = {...this.userObject};
this.authservice.onRegisterButtonClick(newUserObject);
}


}
