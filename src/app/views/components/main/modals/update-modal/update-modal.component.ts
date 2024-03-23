import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
@Input() task:Task = {} as Task;

constructor(private todoservice:TodoService){}
toDoObject:Task = {
  username:'',
  content:'',
  id:0
}


ngOnInit(): void {
  this.toDoObject.username = this.task.username
  this.toDoObject.content = this.task.content
  this.toDoObject.id = this.task.id
}


public close():void{
  this.todoservice.closeModalEmitter.emit(true);
}
public update():void{
  let updatedObject:Task = {...this.toDoObject}
this.todoservice.updateTask(updatedObject)
this.todoservice.closeModalEmitter.emit(true);
}
}
