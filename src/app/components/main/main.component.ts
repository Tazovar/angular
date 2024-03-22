import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private toDoServise:TodoService){}


  ngOnInit(): void {}


  getToDoArray():any[]{
    return this.toDoServise.getToDoArray();
  }
}
