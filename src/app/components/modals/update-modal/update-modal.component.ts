import { Component, Input, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
@Input() card:any
@Input() index:any
constructor(public testService:TestService){}
newObject:any = {
  text:"",
  date:""
}
ngOnInit(): void {
  console.log(this.card)
  this.newObject = {...this.card};
}


updatee():void{
  this.testService.updateTask(this.card.id, this.newObject,this.index)
  console.log(this.testService.toDoArray);
  
  this.testService.closeEmitter.emit(null);
}
}
