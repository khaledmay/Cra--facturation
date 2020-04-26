import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent }  from 'src/app/authentification/authentification.component' ;
import { WriteCraComponent }  from 'src/app/write-cra/write-cra.component' ;


const routes: Routes = [
  { path: '' , component: AuthentificationComponent},
  { path: 'login' , component: AuthentificationComponent},
  { path: 'writeCra' , component: WriteCraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
