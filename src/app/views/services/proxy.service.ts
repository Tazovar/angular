import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/interfaces/cardsinterfaces/card';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  private url:string = 'https://fakestoreapi.com'
  constructor(private http:HttpClient) { }

  getAll():Observable<Card[]>{
    return this.http.get<Card[]>(`${this.url}/products`)
  }


  getById(id:string):Observable<Card>{
    return this.http.get<Card>(`${this.url}/products/${id}`)
  }
}
