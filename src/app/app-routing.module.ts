import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent }  from 'src/app/authentification/authentification.component' ;
import { WriteCraComponent }  from 'src/app/write-cra/write-cra.component' ;
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddCampagnyComponent } from './add-campagny/add-campagny.component';


const routes: Routes = [
  { path: '' , component: AuthentificationComponent},
  { path: 'login' , component: AuthentificationComponent},
  { path: 'writeCra' , component: WriteCraComponent},
  { path: 'addCustomer' , component: AddCustomerComponent},
  { path: 'addCampagny' , component: AddCampagnyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
