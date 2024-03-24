import { Component } from '@angular/core';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private proxyservice:ProxyService){}
task:any = {
  username:"",
  content:"",
  id:0
}
  submit():void{
    this.task.id = this.proxyservice.array.length + 1
    let newTask = {...this.task}
    this.proxyservice.addTask(newTask);
  }
}
