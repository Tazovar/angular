import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private http:HttpClient) { }


  getAllPosts():Observable<any>{
return this.http.get('https://jsonplaceholder.typicode.com/posts', {
  headers:{
    'Content-Type':'application/json'
  }
})
  }


  getOnePost(postId:number):Observable<any>{
return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }


  addPost(newPost:any):Observable<any>{
return this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(newPost), {
  headers:{
    'Content-Type':'application/json'
  }
})
  }

  deletePost(postId:any):Observable<any>{
return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
