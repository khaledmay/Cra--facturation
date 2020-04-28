import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class RequestService {

  constructor(private url : string ,private http : HttpClient) { }

  public getAll(){
    return this.http.get(this.url)
  }

  public create(post){
    return this.http.post(this.url,JSON.stringify(post))
  }

  public update(post){
    return this.http.patch(this.url + '/' + post.id ,JSON.stringify({title : "updated field"}))
  }

  public delete(id){
    return this.http.delete(this.url + '/' + id);
  }
}