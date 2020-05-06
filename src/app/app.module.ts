import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { WriteCraComponent } from './write-cra/write-cra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeekComponent } from './week/week.component';
import { AddCustomerComponent } from './add-customer/add-customer.component'; 
import { HttpClientModule } from '@angular/common/http';
import { PrestationComponent } from './prestation/prestation.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { AddCategoriePrestationComponent } from './add-categorie-prestation/add-categorie-prestation.component';
import { AddConsultantPrestationComponent } from './add-consultant-prestation/add-consultant-prestation.component';
import { AddDetailsConsultantPrestationComponent } from './add-details-consultant-prestation/add-details-consultant-prestation.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCompanyComponent } from './add-company/add-company.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    WriteCraComponent,
    WeekComponent,
    AddCustomerComponent,
    PrestationComponent,
    AddUserComponent,
    AddConsultantComponent,
    AddCategoriePrestationComponent,
    AddConsultantPrestationComponent,
    AddDetailsConsultantPrestationComponent,
    AddProjectComponent,
    AddCompanyComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
