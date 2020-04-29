import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Campany } from '../models/Campany';
@Component({
  selector: 'app-add-campany',
  templateUrl: './add-campany.component.html',
  styleUrls: ['./add-campany.component.css']
})
export class AddCampanyComponent implements OnInit {

  private customer: String;
  campany=new FormGroup({
    denomination : new FormControl('', Validators.required),
    campanyType : new FormControl('', Validators.required)
    
    });

  constructor() { }

  ngOnInit(): void {
  }

  addCampany() : void {
    let campany : Campany;
    if(this.denomination.status=="VALID" && this.campanyType.status=="VALID")
    {
      campany=new Campany(this.denomination.value,this.campanyType.value);
      console.log(campany);
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

