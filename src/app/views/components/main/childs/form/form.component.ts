import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private todoservice:TodoService){}

  public toDoObject:Task = {
    username:"",
    content:"",
    id:0
  }
  public submit():void{
    this.toDoObject.id = this.todoservice.getToDoArray().length + 1;
    let newTask:Task = {...this.toDoObject}
    this.todoservice.addTask(newTask)
  }
}
