import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit,OnDestroy{
  array:any[] = [];
  unsubscriberSubject$:Subject<any> = new Subject();
  constructor(private proxy:ProxyService){}
  ngOnInit(): void {
    this.proxy.getAllPosts()
    .pipe(
      takeUntil(this.unsubscriberSubject$)
    )
    .subscribe({
      next:(data:any) => {
this.array = data
      },
      error:(error) => {
console.error(error)
      },
      complete:() => {
        console.log("completed")
      }
    })



    this.proxy.addCardEmitter.subscribe((res) => {
      this.proxy.addOneCard(res)
      .subscribe((result) => {
        this.array.push(result)
      })
    })
  }


  ngOnDestroy(): void {
    this.unsubscriberSubject$.next(null);
    this.unsubscriberSubject$.complete();
  }
}
