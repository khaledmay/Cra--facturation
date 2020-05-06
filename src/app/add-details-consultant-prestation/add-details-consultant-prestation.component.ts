import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetailsConsultantPrestation } from '../models/DetailsConsultantsPrestation';
import { TypeRecuperation } from '../enums/TypeRecuperation';

@Component({
  selector: 'app-add-details-consultant-prestation',
  templateUrl: './add-details-consultant-prestation.component.html',
  styleUrls: ['./add-details-consultant-prestation.component.css']
})
export class AddDetailsConsultantPrestationComponent implements OnInit {

  private url:String;


   typeRecuperation : TypeRecuperation;
  detailConsultantPrestation=new FormGroup({
    id : new FormControl('', Validators.required),
    idConsultantPrestation : new FormControl('', Validators.required),
    idConsultant : new FormControl('', Validators.required),
    creationDate :  new FormControl(''),
    day : new FormControl(''),
    hoursWork :new FormControl(''),
    approved : new FormControl(''),
    weekNum : new FormControl(''),
    dayName : new FormControl('')
    });




  constructor() { }

  ngOnInit(): void {
  }

  addDetailsConsultantPrestation() : void {
    let detailConsultantPrestation : DetailsConsultantPrestation;
    if(this.id.status=="VALID" && this.idConsultantPrestation.status=="VALID" && this.idConsultant.status=="VALID")
    {
      detailConsultantPrestation=new DetailsConsultantPrestation (this.id.value,this.idConsultantPrestation.value, this.idConsultant.value,this.detailConsultantPrestation.get('creationDate').value,this.detailConsultantPrestation.get('day').value,this.detailConsultantPrestation.get('hoursWork').value,this.detailConsultantPrestation.get('approved').value,this.detailConsultantPrestation.get('weekNum').value,this.detailConsultantPrestation.get('dayName').value,this.typeRecuperation)
    }
    else
      this.detailConsultantPrestation.setErrors({required: true});
  }

  public get id(){
    return this.detailConsultantPrestation.get('id');
  }
  public get idConsultantPrestation(){
    return this.detailConsultantPrestation.get('idConsultantPrestation');
  }

  public get idConsultant(){
    return this.detailConsultantPrestation.get('idConsultant');
  }

  public recuperationTypes() : Array<string> {
    const recuperationTypes = TypeRecuperation;
    var keys = Object.keys(recuperationTypes);
    return keys;
  }



  public chooseRecuperationType(recuperationTypes : String) : void {
    switch(recuperationTypes){
      case "CP" : this.typeRecuperation=TypeRecuperation.CP;
      break;
      case "RTT" : this.typeRecuperation=TypeRecuperation.RTT;
      break;
      case "RTN" : this.typeRecuperation=TypeRecuperation.RTN;
      break;
      default : this.typeRecuperation=TypeRecuperation.RTN;
    }    
  }

}
