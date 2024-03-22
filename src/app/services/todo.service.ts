import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoArray:any[] = [];


  
  getToDoArray():any[]{
    return this.toDoArray;
  }


  addTask(card:any):void{
this.toDoArray.push(card)
  }

  deleteTask(index:number):void{
    this.toDoArray.splice(index, 1);
  }


  updateTask(id:number,updatedCard:any){
let findCard = this.toDoArray.find((card) => {
  return card.id == id
});


if(findCard){
findCard.content = updatedCard.content
findCard.date = updatedCard.date
}else{
  console.log("card is undifined")
}
  }
  constructor() { }
}
