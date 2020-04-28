import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent }  from 'src/app/authentification/authentification.component' ;
import { WriteCraComponent }  from 'src/app/write-cra/write-cra.component' ;
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [
  { path: '' , component: AuthentificationComponent},
  { path: 'login' , component: AuthentificationComponent},
  { path: 'writeCra' , component: WriteCraComponent},
  { path: 'addCustomer' , component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
