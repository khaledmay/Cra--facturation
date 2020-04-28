import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  private campagny: String;
  customer=new FormGroup({
    denomination : new FormControl('', Validators.required),
    responsableManager : new FormControl('', Validators.required),
    tva :  new FormControl(''),
    siret : new FormControl(''),
    juridiqueStatus : new FormControl('')
    });

  constructor() { }

  ngOnInit(): void {
  }

  public chooseCampagny(campagny : String) : void {
    this.campagny=campagny;
  }

  addCustomer() : void {
    let customer : Customer;
    if(this.denomination.status=="VALID" && this.responsableManager.status=="VALID")
    {
      customer=new Customer(this.denomination.value,this.customer.get('juridiqueStatus').value,this.responsableManager.value,this.customer.get('siret').value,this.customer.get('tva').value,this.campagny);
      console.log(customer);
    }
    else
      this.customer.setErrors({required: true});
  }

  public get denomination(){
    return this.customer.get('denomination');
  }

  public get responsableManager(){
    return this.customer.get('responsableManager');
  }


}
