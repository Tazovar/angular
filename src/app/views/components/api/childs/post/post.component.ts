import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProxyService } from '../../proxy.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
@Input() post:any
@Output() deletePostEmitter = new EventEmitter();
constructor(private proxy:ProxyService){}
deletee(){
this.proxy.deletePost(this.post.id)
.subscribe({
  next:(data:any) => {
this.deletePostEmitter.emit(this.post.id);
  },
  error:(err:any) => {
    console.error(err)
  },
  complete:() => {
    console.log('completed')
  }
})
}
}
