import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() card:any


userObject:any = {
  content:"",
  date:""
}
constructor(private modalService:ModalService,private toDoService:TodoService){}

ngOnInit(): void {
  this.userObject = {...this.card}
}


closeModal():void{
this.modalService.closeEmitter.emit('close modal');
}

update():void{
  let updatedCardObject = {...this.userObject}
  this.toDoService.updateTask(this.card.id,updatedCardObject);
  this.modalService.closeEmitter.emit("updated")
}
}
