import { Component, OnInit } from '@angular/core';
import { CompanyType } from '../enums/CompanyType';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from '../models/Company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  private url:String;
  typeCompany : CompanyType;

  company=new FormGroup({
    denomination : new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  addCompany() : void {
    let company : Company;
    if(this.denomination.status=="VALID")
    {
      company=new Company (this.denomination.value,this.company.get('consultantType').value)
    }
    else
      this.company.setErrors({required: true});
  }

  public get denomination(){
    return this.company.get('denomination');
  }

  public companyType() : Array<string> {
    const companyType = CompanyType;
    var keys = Object.keys(companyType);
    return keys;
  }
  public chooseCompanyType(typeCompany : String) : void {
    switch(typeCompany){
      case "ESN" : this.typeCompany=CompanyType.ESN;
      break;
      case "FINTECH" : this.typeCompany=CompanyType.FINTECH;
      break;
      case "STARTUP" : this.typeCompany=CompanyType.STARTUP;
      break;
      default : this.typeCompany=CompanyType.ESN;
    }    
  }



}
