import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TodoService } from '../../todo.service';
import { UpdateModalComponent } from '../../modals/update-modal/update-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
@Input() task:Task = {} as Task
@ViewChild('modalContainer' , {read:ViewContainerRef}) modalContainer!:ViewContainerRef

constructor(private todoservice:TodoService,private router:Router){}

public removeTask():void{
this.todoservice.removeTask(this.task.id)
this.router.navigate(['/'])
}


ngOnInit(): void {
  this.todoservice.closeModalEmitter.subscribe((response:boolean) => {
console.log(response);
this.modalContainer.clear();
  })
}

public updateTask():void{
let modal:any= this.modalContainer.createComponent(UpdateModalComponent);
modal.instance.task = this.task
}


public goTaskDetails():void{
this.router.navigate(['details',this.task.id])
}
}
