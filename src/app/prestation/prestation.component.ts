import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Prestation } from '../models/Prestation';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {

  prestation=new FormGroup({
  libellePrestation : new FormControl('', Validators.required),
  idCategoriePrestation : new FormControl('', Validators.required)

});


  constructor() { }

  ngOnInit(): void {
  }

  addPrestation() : void {
    let prestation : Prestation;
    if(this.libellePrestation.status=="VALID" && this.idCategoriePrestation.status=="VALID")
    {
      prestation=new Prestation(this.libellePrestation.value,this.idCategoriePrestation.value);
      console.log(prestation);
    }
    else
      this.prestation.setErrors({required: true});
  }

  public get libellePrestation(){
    return this.prestation.get('libellePrestation');
  }

  public get idCategoriePrestation(){
    return this.prestation.get('idCategoriePrestation');
  }

}
