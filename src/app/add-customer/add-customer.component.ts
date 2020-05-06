import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../models/Customer';
import { RequestService } from '../services/requests.service';
import { Company } from '../models/Company';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  private url:String;
  private campanies : Company[]=[];
  private choosenCampany: String;
  customer=new FormGroup({
    denomination : new FormControl('', Validators.required),
    responsableManager : new FormControl('', Validators.required),
    tva :  new FormControl(''),
    siret : new FormControl(''),
    juridiqueStatus : new FormControl('')
    });

  constructor(private requestService : RequestService) { 
    this.url=""; // url of the backend service which save the customer in the database
    // this.campanies= this.requestService.get()
   
  }

  ngOnInit(): void {
  }

  public chooseCampany(campagny : String) : void {
    this.choosenCampany=campagny;
  }

  addCustomer() : void {
    let customer : Customer;
    if(this.denomination.status=="VALID" && this.responsableManager.status=="VALID")
    {
      customer=new Customer(this.denomination.value,this.customer.get('juridiqueStatus').value,this.responsableManager.value,this.customer.get('siret').value,this.customer.get('tva').value,this.choosenCampany);
      console.log(customer);
      this.requestService.post(this.url,customer).subscribe(resultat => console.log(resultat));
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

  public get Campanies(): Company[] {
    return this.campanies;
  }


}
