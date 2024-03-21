import { EventEmitter, Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})


export class TestService {
closeEmitter:EventEmitter<null> = new EventEmitter();
toDoArray:any[] = [];


getToDoArray():any[]{
    return this.toDoArray;
}


addTask(form:any):void{
this.toDoArray.push(form)
}


deleteTask(index:number):void{
    this.toDoArray.splice(index,1)
}


updateTask(id:any,form:any,index:number){
let findTask = this.toDoArray.find((task) => {
    return task.id == id
})
if(findTask){
this.toDoArray[index] = form;
}
}
}