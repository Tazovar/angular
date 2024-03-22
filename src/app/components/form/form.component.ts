import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

userObject:any = {
  content:"",
  date:"",
}

constructor(private toDoService:TodoService){}
  submit():void{
    this.userObject.id = this.toDoService.getToDoArray().length + 1;
    
    let newObject  ={...this.userObject}
    
    this.toDoService.addTask(newObject)
    console.log(this.toDoService.getToDoArray());
  }
}
