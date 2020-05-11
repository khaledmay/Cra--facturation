import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/app.settings';
import { DetailsConsultantPrestation } from '../models/DetailsConsultantsPrestation';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DetailsConsultantPrestationService {

  constructor(private http :HttpClient) { }


  createDetailsConsultant(detailconsultantprestation : DetailsConsultantPrestation) :Observable<DetailsConsultantPrestation> {

    return this.http.post<DetailsConsultantPrestation>(AppSettings.APP_URL + "/detailconsultantprestation/",detailconsultantprestation);
  }


}
