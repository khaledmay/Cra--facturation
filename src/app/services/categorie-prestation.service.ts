import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriePrestation } from '../models/CategoriePrestation';
import { AppSettings } from '../settings/app.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriePrestationService {

  constructor(private http :HttpClient) { }


  getAll():  Observable<Array<string>> {

    return this.http.get<Array<string>>(AppSettings.APP_URL + "/categorieprestation/")
  }

  createCategoriePrestation(categoriePrestation : CategoriePrestation)  : Observable<CategoriePrestation>{

    return this.http.post<CategoriePrestation>(AppSettings.APP_URL + "/categorieprestation/",categoriePrestation);
  }
  getAllByDetail(idCategorie : string) : Observable<CategoriePrestation>{
    return this .http.get<CategoriePrestation>(AppSettings.APP_URL + "/categorieprestation/details/" + idCategorie  );

  }

  updateCategoriePrestation (categoriePrestionId: CategoriePrestation ): Observable<CategoriePrestation> {
    return this.http.put<CategoriePrestation>(AppSettings.APP_URL + "/CategoriePrestation/" , categoriePrestionId );
      
  }



}
