import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { UpdateModalComponent } from '../modals/update-modal/update-modal.component';
import { modelNames } from 'mongoose';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() card:any
@Input() index:any
@ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;


constructor(private testService:TestService){}
deleteCard():void{
this.testService.deleteTask(this.index)
}


updateCard(){
let modal:any = this.container.createComponent(UpdateModalComponent);
console.log(modal);

modal.instance.card = this.card;
modal.instance.index = this.index
}


ngOnInit(): void {
  this.testService.closeEmitter.subscribe(() => {
    this.container.clear();
  })
}
}
