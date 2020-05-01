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
import { AddProjectComponent } from './add-project/add-project.component';
import { AddCampanyComponent } from './add-campany/add-campany.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    WriteCraComponent,
    WeekComponent,
    AddCustomerComponent,
    AddProjectComponent,
    AddCampanyComponent
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
