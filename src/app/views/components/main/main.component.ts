import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private todoservice:TodoService){}


  getArray():Array<Task>{
    return this.todoservice.getToDoArray();
  }
}
