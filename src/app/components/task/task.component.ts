import { Component, Input } from '@angular/core';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
@Input() task:any

constructor(private proxy:ProxyService){}

deletee():void{
this.proxy.deletee(this.task.id)
}

updatee(){
this.proxy.update(this.task.id)
}
}
