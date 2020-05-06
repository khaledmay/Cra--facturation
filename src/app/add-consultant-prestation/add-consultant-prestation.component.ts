import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsultantPrestation } from '../models/ConsultantPrestation';

@Component({
  selector: 'app-add-consultant-prestation',
  templateUrl: './add-consultant-prestation.component.html',
  styleUrls: ['./add-consultant-prestation.component.css']
})
export class AddConsultantPrestationComponent implements OnInit {

  consultantPrestation=new FormGroup({
    tarifHT : new FormControl('', Validators.required),
    dateAffectation :  new FormControl('')
    });

  constructor() { }

  ngOnInit(): void {
  }

  addConsultantPrestation() : void {
    let consultantPrestation : ConsultantPrestation;
    if(this.tarifHT.status=="VALID")
    {
      consultantPrestation=new ConsultantPrestation (this.tarifHT.value,this.consultantPrestation.get('dateAffectation').value)
    }
    else
      this.consultantPrestation.setErrors({required: true});
  }

  public get tarifHT(){
    return this.consultantPrestation.get('tarifHT');
  }
  public get dateAffectation(){
    return this.consultantPrestation.get('dateAffectation');
  }


}


