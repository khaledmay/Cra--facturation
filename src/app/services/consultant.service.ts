import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';
import { Consultant } from 'src/app/models/consultant';
import { Prestation } from 'src/app/models/Prestation';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http :HttpClient) { }



    getAll():Observable<Array<string>> {

      return this.http.get<Array<string>>(AppSettings.APP_URL + "/consultant/")
    }


    createConsultant(consultant : Consultant) : Observable<Consultant>{

      return this.http.post<Consultant>(AppSettings.APP_URL + "/consultant/",consultant);
    }

    createCra(idConsultant :string , year : string , month : string) :Observable<any>{

      let param = new HttpParams();
      param.append("idConsultant", idConsultant);
      param.append("year", year);
      param.append("month", month);
  
      return this .http.post(AppSettings.APP_URL + "/consultant/cra/" ,param);
    }

    SubmitCra(idConsultant :string , year : string , month : string) :Observable<any>{

      let param = new HttpParams();
      param.append("idConsultant", idConsultant);
      param.append("year", year);
      param.append("month", month);
  
      return this .http.post(AppSettings.APP_URL + "/consultant/cra/submited/" ,param);
    }

    getAllPrestation (idConsultant :string , prestation : Prestation) : Observable<any>{
      return this .http.get(AppSettings.APP_URL + "/consultant/prestations" + prestation + "/" + idConsultant);
    }

    affectConsultant(idConsultant :string , idPrestation : string ) : Observable<any>{

      let param = new HttpParams();
      param.append("idConsultant", idConsultant);
      param.append("idPrestation", idPrestation);
     
  
      return this .http.post(AppSettings.APP_URL + "/consultant/prestations" ,param);
    }
    addCraPrestation(idConsultantPrestation :string , year : string , month : string) : Observable<any>{

      let param = new HttpParams();
      param.append("idConsultantPrestation", idConsultantPrestation);
      param.append("year", year);
      param.append("month", month);
  
      return this .http.post(AppSettings.APP_URL + "/consultant/cra/" ,param);
    }

}
