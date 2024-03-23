import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProxyService } from '../../proxy.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit,OnDestroy {
unsubscribeSubject$:Subject<any> = new Subject();
data:any
  constructor(private proxy:ProxyService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param:any) => {
      let id = param.id

      this.proxy.getOnePost(id)
      .pipe(
        takeUntil(this.unsubscribeSubject$)
      )
      .subscribe((response) => {
this.data = response
      },(err) => {
        console.error(err);
      },() => {
        console.log('complate');
        
      })
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject$.next(null);
    this.unsubscribeSubject$.complete();
  }
}
