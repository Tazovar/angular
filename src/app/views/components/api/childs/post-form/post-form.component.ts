import { Component, EventEmitter, Output } from '@angular/core';
import { ProxyService } from '../../proxy.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
@Output() newPostEmitter:EventEmitter<any>= new EventEmitter();
  constructor(private proxy:ProxyService){}
newTitle!:string
  public submit():void{
    let newPost = {
      title:this.newTitle
    }
    this.proxy.addPost(newPost).subscribe({
      next:(result) => {
        console.log(result);
        this.newPostEmitter.emit(result);
      },
      error:(err) =>  {
        console.error(err) 
      },
      complete:() => {
        console.log('compate'); 
      }
    })
  }
}
