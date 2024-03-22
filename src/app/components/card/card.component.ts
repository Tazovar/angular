import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ModalComponent } from '../modals/modal/modal.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() card:any
@Input() index:any
@ViewChild('container',{read:ViewContainerRef}) container!:ViewContainerRef;
constructor(private toDoService:TodoService,private modalService:ModalService) {
  
}
deleteOneItem(){
this.toDoService.deleteTask(this.index)
}


ngOnInit(): void {
  this.modalService.closeEmitter.subscribe((response) => {
    this.container.clear();
  })
}
updateOneItem():void{
  let modal:any = this.container.createComponent(ModalComponent);
  modal.instance.card = this.card
}
}
