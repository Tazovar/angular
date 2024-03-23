import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private todoservice:TodoService){}

  public taskData:Task = {} as Task
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param:any) => {
let id = param.id;
this.taskData = this.todoservice.getOneTask(id);
    })
  }
}
