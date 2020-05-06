import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriePrestation } from '../models/CategoriePrestation';

@Component({
  selector: 'app-add-categorie-prestation',
  templateUrl: './add-categorie-prestation.component.html',
  styleUrls: ['./add-categorie-prestation.component.css']
})
export class AddCategoriePrestationComponent implements OnInit {


  categoriePrestation=new FormGroup({
    domainePrestation : new FormControl('', Validators.required),
    facturable : new FormControl(true)
  
  });
  
  constructor() { }

  ngOnInit(): void {
  }
  addCategoriePrestation() : void {
    let categoriePrestation : CategoriePrestation;
    if(this.domainePrestation.status=="VALID" )
    {
      categoriePrestation=new CategoriePrestation(this.domainePrestation.value,this.facturable.value);
      console.log(categoriePrestation);
    }
    
    else
      this.categoriePrestation.setErrors({required: true});
  }

  public get domainePrestation(){
    return this.categoriePrestation.get('domainePrestation');
  }
  public get facturable(){
    return this.categoriePrestation.get('facturable');
  }

}

