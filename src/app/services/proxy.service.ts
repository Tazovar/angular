import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
url:string = 'https://jsonplaceholder.typicode.com'
addCardEmitter:EventEmitter<any> = new EventEmitter();
constructor(private http:HttpClient) { }
 getAllPosts():Observable<any>{
    let httpHeader = new HttpHeaders({'Content-Type':'application/json'}) 
    return  this.http.get(`${this.url}/posts`,{headers:httpHeader})
  }


  getOne(id:number):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }


  addOneCard(newCard:any){
    return this.http.post(`${this.url}/posts`, JSON.stringify(newCard), {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    } )
  }
}
