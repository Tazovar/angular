import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {
array:Array<any> = [];
unsubscriberSubject$: Subject<any> = new Subject();

  constructor(private proxy:ProxyService) {}

  ngOnInit(): void {
    this.proxy.subject
    .pipe(
      takeUntil(this.unsubscriberSubject$)
    )
    .subscribe((array) => {
      this.array = array;
    },(error:any) => {
      console.error(error);      
    },() => {
      console.log("compated");

    })
  }

  ngOnDestroy(): void {
    this.unsubscriberSubject$.next(null);
    this.unsubscriberSubject$.complete();
  }

  password:string = ''

  generate(){
    this.password = this.proxy.generateRandomPassword();
  }
}
