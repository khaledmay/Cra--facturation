import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class RequestService {

  constructor(private http : HttpClient) { }

  public get(url){
    return this.http.get(url);
  }

  public post(url,object){
    return this.http.post(url,JSON.stringify(object))
  }

  public update(url,object){
    return this.http.patch(url + '/' + object.id ,JSON.stringify({title : "updated field"}))
  }

  public delete(url,id){
    return this.http.delete(url + '/' + id);
  }
}