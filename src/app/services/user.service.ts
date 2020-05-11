import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app.settings';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map, catchError  } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }


  authentiateWithAdmin() :  Observable<Array<string>>{
    return this.http.get<Array<string>>(AppSettings.APP_URL + "/users/checkAdmin/");
     
  }
  
createUser(users :User):Observable<User>  {

    return this.http.post<User>(AppSettings.APP_URL + "/users/" , users) 
  }


  createUserUsingPUT(idUser : string ,groupName : string):Observable<Array<User>> {
    return this .http.get<Array<User>>(AppSettings.APP_URL + "/users/group/" + idUser + "/" + groupName);

  }

  updateUser (idUsers: User , groupName : string): Observable<User> {
    return this.http.put<User>(AppSettings.APP_URL + "/User/group/" +groupName, idUsers );
      
  }



}
