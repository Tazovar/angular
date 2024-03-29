import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/interfaces/card';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data$!:Observable<Card[]>

  constructor(private _proxyService:ProxyService) {}

  ngOnInit(): void {
    this.data$ = this._proxyService.getAll();
  }
}
