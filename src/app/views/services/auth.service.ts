import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Register } from 'src/app/core/interfaces/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
users:Array<Register> = JSON.parse(localStorage.getItem("users") || '[]')


constructor(private router:Router){}
setRegisterDataInLocalStorage(users:Register[]){
  return localStorage.setItem("users", JSON.stringify(users))
}
onRegisterBtnClick(data:Register){
let findUserUsingUserName = this.users.find((user) => {
  return user.username == data.username
});

if(findUserUsingUserName !== undefined ||findUserUsingUserName != null){
  alert('user already is registered')
}else{
  this.users.push(data);
  this.setRegisterDataInLocalStorage(this.users)
  this.router.navigate(['auth/login'])
  alert("user register successfuly")
}
}


setTokenInLocalStorage(){
  localStorage.setItem("token", JSON.stringify('SFNASINsiafniuasfiASFIUAsfaoisjfiasUFIASnfiuasf'))
}
removeTokenFromLocalStorage(){
  localStorage.removeItem("token")
}
onLoginBtnClick(data:Login | any){
  let findUserUsingUserNameAndPassword = this.users.find((user:any) => {
    return user.username == data.username && user.password == data.password
  })

  console.log(findUserUsingUserNameAndPassword);
  
  if(findUserUsingUserNameAndPassword){
this.setTokenInLocalStorage()
this.router.navigate(['/main'])
  }else{
    alert('invalid password or username')
  }
}



isAuthenticated():boolean{
  let token = localStorage.getItem('token')
  return token != undefined || token != null;
}



logOut(){
this.removeTokenFromLocalStorage();
this.router.navigate(['auth/login'])
}
  
}
