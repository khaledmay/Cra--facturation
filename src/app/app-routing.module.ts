import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent }  from 'src/app/authentification/authentification.component' ;
import { WriteCraComponent }  from 'src/app/write-cra/write-cra.component' ;
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { PrestationComponent } from './prestation/prestation.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { AddCategoriePrestationComponent } from './add-categorie-prestation/add-categorie-prestation.component';
import { AddConsultantPrestationComponent } from './add-consultant-prestation/add-consultant-prestation.component';
import { AddDetailsConsultantPrestationComponent } from './add-details-consultant-prestation/add-details-consultant-prestation.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCompanyComponent } from './add-company/add-company.component';


const routes: Routes = [
  { path: '' , component: AuthentificationComponent},
  { path: 'login' , component: AuthentificationComponent},
  { path: 'writeCra' , component: WriteCraComponent},
  { path: 'addCustomer' , component: AddCustomerComponent},
  { path: 'addCompany' , component: AddCompanyComponent},
  { path: 'prestation' , component: PrestationComponent},
  { path: 'addUser' , component: AddUserComponent},
  { path: 'addConsultant' , component: AddConsultantComponent},
  { path: 'addCategoriePrestation' , component: AddCategoriePrestationComponent},
  { path: 'addConsultantPrestation' , component:AddConsultantPrestationComponent},
  { path: 'addDetailsConsultantPrestation' , component:AddDetailsConsultantPrestationComponent},
  { path: 'addProject' , component:AddProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
