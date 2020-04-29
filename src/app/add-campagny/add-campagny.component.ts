import { Component, OnInit } from '@angular/core';
import { Campagny } from '../models/Campagny';
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

  campagny=new FormGroup({
    denomination : new FormControl('', Validators.required),
    campanyType : new FormControl('', Validators.required)
    });

  constructor(private requestService : RequestService) {
    this.url=""; // url of the backend service which save the campany in the database
   }

  ngOnInit(): void {
  }

  addCampagny() : void {
    let campagny : Campagny;
    if(this.denomination.status=="VALID" && this.campanyType.status=="VALID")
    {
      campagny=new Campagny(this.denomination.value,this.campanyType.value);
      console.log(campagny);
      this.requestService.post(this.url,campagny).subscribe(resultat => console.log(resultat));
    }
    else
      this.campagny.setErrors({required: true});
  }

  public get denomination(){
    return this.campagny.get('denomination');
  }

  public get campanyType(){
    return this.campagny.get('campanyType');
  }

}

