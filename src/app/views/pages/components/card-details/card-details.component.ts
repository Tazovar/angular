import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/interfaces/cardsinterfaces/card';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit{
data$!:Observable<Card>

constructor(private _proxyService:ProxyService,private _acitvatedRouter:ActivatedRoute){}
ngOnInit(): void {
  this._acitvatedRouter.params.subscribe((param:any) => {
    let id = param['cardId']

    if(id){
      this.data$ = this._proxyService.getById(id)
    }
  } )

}
}
