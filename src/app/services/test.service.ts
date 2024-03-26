import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient ) { }

  getAllPosts():Observable<any>{
return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
