import { Component } from '@angular/core';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-add-card-input',
  templateUrl: './add-card-input.component.html',
  styleUrls: ['./add-card-input.component.css']
})
export class AddCardInputComponent {
title:string = ''

constructor(private proxy:ProxyService){}


addCard(){
  let newObject = {
    title:this.title
  }
this.proxy.addCardEmitter.emit(newObject)
}
}
