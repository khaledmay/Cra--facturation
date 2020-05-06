import { Component, OnInit } from '@angular/core';
import { Consultant } from '../models/consultant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestService } from '../services/requests.service';
import { ConsultantType } from '../enums/ConsultantType';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css']
})
export class AddConsultantComponent implements OnInit {

  private url:String;
  typeConsultant : ConsultantType;
  consultant=new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    birthDate :  new FormControl(''),
    mobileNumber : new FormControl(''),
    mail : new FormControl('')
    });


    constructor() { }
  
    ngOnInit(): void {
    }
  
    addConsultant() : void {
      let consultant : Consultant;
      if(this.firstName.status=="VALID" && this.lastName.status=="VALID")
      {
        consultant=new Consultant (this.firstName.value,this.lastName.value,this.consultant.get('birthDate').value,this.consultant.get('mobileNumber').value,this.consultant.get('mail').value,this.consultant.get('consultantType').value)
      }
      else
        this.consultant.setErrors({required: true});
    }
  
    public get firstName(){
      return this.consultant.get('firstName');
    }
    public get lastName(){
      return this.consultant.get('lastName');
    }
    public consultantType() : Array<string> {
      const consultantType = ConsultantType;
      var keys = Object.keys(consultantType);
      return keys;
    }
    public chooseConsultantType(typeConsultant : String) : void {
      switch(typeConsultant){
        case "INTERNAL" : this.typeConsultant=ConsultantType.INTERNAL;
        break;
        case "EXTERNAL" : this.typeConsultant=ConsultantType.EXTERNAL;
        break;
        default : this.typeConsultant=ConsultantType.INTERNAL;
      }    
    }
  
  
  }