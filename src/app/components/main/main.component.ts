import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

constructor(private testService:TestService){}


getArray(){
  return this.testService.getToDoArray();
}
}
