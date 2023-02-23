import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PartieAddingComponent } from './partie/partie-adding/partie-adding.component';


const routes: Routes = [
  {path:'accueil', component:IndexComponent},
  {path:'nouvellePartie', component:PartieAddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
