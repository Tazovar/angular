import { EventEmitter, Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  closeModalEmitter: EventEmitter<boolean> = new EventEmitter();
private toDoArray:Array<Task> = [];


public getToDoArray():Array<Task>{
  return this.toDoArray
}

public addTask(task:Task):void{
this.toDoArray.push(task)
}


public removeTask(taskId:number | undefined):void{
  this.toDoArray = this.toDoArray.filter((task) => {
    return task.id != taskId
  })
}


public updateTask(task:Task):void{
  let findCard = this.toDoArray.find((card) => {
    return card.id == task.id
  });

  if(findCard){
    findCard.username = task.username
    findCard.content = task.content
  }else{
    console.log("card is undifined")
  }
}



public getOneTask(taskId:number | undefined):any{
let findTaskById = this.toDoArray.find((task:Task) => {
  return task.id == taskId
})

  return findTaskById;

}
  constructor() { }
}
