import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PartyAddingComponent } from './party/party-adding/party-adding.component';


const routes: Routes = [
  {path:'accueil', component:IndexComponent},
  {path:'nouvellePartie', component:PartyAddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
