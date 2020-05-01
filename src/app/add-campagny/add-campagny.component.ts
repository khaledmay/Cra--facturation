import { Component, OnInit } from '@angular/core';
import { Campany } from '../models/Campany';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestService } from '../services/requests.service';
@Component({
  selector: 'app-add-campagny',
  templateUrl: './add-campagny.component.html',
  styleUrls: ['./add-campagny.component.css']
})
export class AddCampagnyComponent implements OnInit {

  private url:String;
  private customer: String;

  campany=new FormGroup({
    denomination : new FormControl('', Validators.required),
    campanyType : new FormControl('', Validators.required)
    });

  constructor(private requestService : RequestService) {
    this.url=""; // url of the backend service which save the campany in the database
   }

  ngOnInit(): void {
  }

  addCampany() : void {
    let campany : Campany;
    if(this.denomination.status=="VALID" && this.campanyType.status=="VALID")
    {
      campany=new Campany(this.denomination.value,this.campanyType.value);
      console.log(campany);
      this.requestService.post(this.url,campany).subscribe(resultat => console.log(resultat));
    }
    else
      this.campany.setErrors({required: true});
  }

  public get denomination(){
    return this.campany.get('denomination');
  }

  public get campanyType(){
    return this.campany.get('campanyType');
  }

}

