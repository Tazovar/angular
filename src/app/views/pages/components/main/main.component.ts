import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/interfaces/cardsinterfaces/card';
import { AuthService } from 'src/app/views/services/auth.service';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data$!:Observable<Card[]>

  constructor(private _proxyService:ProxyService,private _authservice:AuthService) {}

  ngOnInit(): void {
    this.data$ = this._proxyService.getAll();
  }

  logOut(){
    this._authservice.logOut()
  }
}
