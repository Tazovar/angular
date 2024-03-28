import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   getAllUser:any[]  = JSON.parse(localStorage.getItem('users') || '[]')

users:any[] = JSON.parse(localStorage.getItem('users') || '[]')

  setDataInLocaStorage(data:any){
    return localStorage.setItem('users',JSON.stringify(data))
  }

  onRegisterButtonClick(object:any){
    if(object.email.length == 0 || object.password.length == 0 
      || object.confirmPassword.length == 0){
      alert('please fill all fields')
    }
    else if (object.password != object.confirmPassword){
      alert('passwords do not match')
    }
    else{
      let findNewUserInArray = this.getAllUser.find((user) => {
        return user.email == object.email;
      })
      if(findNewUserInArray != undefined || findNewUserInArray != null){
  alert('this email is already registered')
      }else{
        let usersArrayLength = this.getAllUser.length;
      this.users.push(object)        
    this.setDataInLocaStorage(this.users);
    console.log(this.users);
    this.getAllUser = JSON.parse(localStorage.getItem('users') || '[]')
    if(usersArrayLength == this.getAllUser.length){
    alert('register error')
    }else{
      alert("register successfully");
    }
      }
    }
  }
  
  onLoginButtonClick(object:any){
    if(object.email.length == 0 || object.password.length == 0 ){
      alert("please fill all fields")
    }else{

      let getAllUser:any[]  = JSON.parse(localStorage.getItem('users') || '[]')
      if(getAllUser && getAllUser.length > 0){
        let findUser = getAllUser.find((user) => {
          return user.email == object.email && user.password == object.password
        })
      
        if(findUser != undefined || findUser != null){
          this.setTokenInLocaStorage();
        }else{
          alert('invalid password or email')
        }
      }
    }
   }

   onLogOutButtonClick():void{
    this.removeTokenFromLocaStorage();
   }


  setTokenInLocaStorage():void{
    localStorage.setItem('token', JSON.stringify('SIHSFUSJHJFASKFAOSFHIASF12412442412'))
  }

  removeTokenFromLocaStorage():void{
    localStorage.removeItem('token')
  }
  

  isAuth(){
    return localStorage.getItem('token')
  }
  constructor() { }
}
