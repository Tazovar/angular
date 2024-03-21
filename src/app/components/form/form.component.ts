import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
userObject = {
  text:"",
  date:"",
  id:0
}

constructor(private testService:TestService){}

submit(){
  this.userObject.id = this.testService.getToDoArray().length + 1
  let newObject = {...this.userObject};
this.testService.addTask(newObject);
console.log(newObject);
}
}
