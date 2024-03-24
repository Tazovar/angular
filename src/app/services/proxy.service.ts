import { Injectable } from '@angular/core';
import { find, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  array:Array<any>  = [];
  namesArray:Array<string> = [
    'tazo','giorgi','valeri','jhon','max','nino','mariami','shota','nikolozi','ioane'
  ]
  subject:Subject<any> = new Subject();
  constructor() { }

  addTask(task:any):void{
this.array.push(task);
this.subject.next(this.array);
  }


  deletee(taskId:number):void {
    this.array = this.array.filter((task) => {
      return task.id != taskId
    })
    this.subject.next(this.array)
  }


  update(taskId:any):void{
    if(taskId){
      let findTask = this.array.find((task) => {
        return task.id == taskId;
      })
      if(findTask){
        let randomIndex = Math.floor(Math.random() * this.namesArray.length);
        let randomName = this.namesArray[randomIndex];
        findTask.username = randomName;
        this.subject.next(this.array);
      }else{
        console.error("Task not found")
      }
    }else{
console.error("task id is missing");

    }
  }

  passwordString:string = "ASDFASasdaf1231241255s_!@#$";
  passwordSmallElements:string = "afasgandbjnsdijbosjdgokpoaksvoad"
  passwordBiglElements:string = "SFANSGIASIGHAIUSHGIAHSIUGUIASGASG"
  passwordSymbols:string = "!@#$@%"
  
  generateRandomPassword(){
    let password = "";
let pattern  = /[0-9]/
let symbolPattern = /[!@#$%]/
let bigWordPattern = /[A-Z]/;
let smallWordPattern = /[a-z]/;
for(let i = 0; i < 8;i++){
  let randomIndex = Math.floor(Math.random() * this.passwordString.length);
  password += this.passwordString[randomIndex];
}

if(!pattern.test(password)){
  let randomNumber = Math.floor(Math.random() * 100)  
  password += randomNumber
}
else if(!symbolPattern.test(password)){
  let randomIndex = Math.floor(Math.random() * this.passwordSymbols.length)
  console.log('აქ დავუმატე ერთი სიმბოლო რადგან აკლდა');
  password += this.passwordSymbols[randomIndex]

}
else if (!bigWordPattern.test(password))
{
  let randomIndex = Math.floor(Math.random() * this.passwordBiglElements.length)
  console.log('აქ დავუმატე ერთი დიდი ასო რადგან აკლდა');
  password += this.passwordBiglElements[randomIndex]
}
else if (!smallWordPattern.test(password)){
  let randomIndex = Math.floor(Math.random() * this.passwordSmallElements.length);
  console.log('აქ დავუმატე ერთი პატარა ასო რადგან აკლდა');

  password += this.passwordSmallElements[randomIndex]
}
    return password
    
  }
}
