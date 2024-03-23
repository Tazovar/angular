import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProxyService } from './proxy.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit,OnDestroy {
posts:Array<any> = [];
unsubscribesubject$:Subject<any> = new Subject();

constructor(private proxy:ProxyService){}


ngOnInit(): void {
this.proxy.getAllPosts().pipe(
takeUntil(this.unsubscribesubject$)
).subscribe((response) => {
  this.posts = response
})
}

ngOnDestroy(): void {
  this.unsubscribesubject$.next(null);
this.unsubscribesubject$.complete();
}

public newPostEmitterSubscirber(event:any){
  this.posts.push(event)
}

deletePostEmitterSubscriber(postID:any):void{
  this.posts = this.posts.filter((post) => {
    return post.id != postID
  })
}
}
