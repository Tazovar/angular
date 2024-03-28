import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    './../../css/auth.css'
  ]
})
export class LoginComponent {
userObject:any = {
  email:'',
  password:'',
}

constructor(private authservice:AuthService,private router:Router){}


submit():void{
  let userObject = {...this.userObject}
this.authservice.onLoginButtonClick(userObject)

setTimeout(() => {
  if(this.authservice.isAuth()){
    this.router.navigate(['/home',userObject.email])
  }
}, 0);
}
}
