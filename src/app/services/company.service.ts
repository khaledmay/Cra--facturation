import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app.settings';
import { Company } from '../models/Company';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http :HttpClient) { }

  getAll() :  Observable<Array<string>>{

    return this.http.get<Array<string>>(AppSettings.APP_URL + "/companies/")
  }

  createCompany(campany : Company):Observable<Company> {

    return this.http.post<Company>(AppSettings.APP_URL + "/companies/",campany);
  }

  getAllCustomerForCompany(idCompany  : string ) :Observable<Company>{
    return this .http.get<Company>(AppSettings.APP_URL + "/companies/" + idCompany );

  }
  addCustome(idCompany :string ) :Observable<any>{

    return this .http.post(AppSettings.APP_URL + "/companies/customer" ,idCompany);
  }


}
