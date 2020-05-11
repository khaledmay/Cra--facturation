import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { AppSettings } from '../settings/app.settings';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http :HttpClient) { }



  createCustomer(customer :Customer) :Observable<Customer>{

    return this.http.post<Customer>(AppSettings.APP_URL + "/customer/" , customer);
  }

  createProject(idCustomer : string):Observable<any> {

    return this.http.post(AppSettings.APP_URL + "/customer/project/" , idCustomer);
  }

  createPrestation(idCustomer : string , idProject : string)  :Observable<any>{

    let param = new HttpParams();
      param.append("idCustomer", idCustomer);
      param.append("idPresidProjecttation", idProject);
      return this .http.post(AppSettings.APP_URL + "/consultant/projects/prestations/" ,param);
  }

getall():Observable<Array<string>> {
  
    return this.http.get<Array<string>>(AppSettings.APP_URL + "/customers/")
  
}

}
