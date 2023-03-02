import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PartyAddingComponent } from './party/party-adding/party-adding.component';
import { PartyConsultingComponent } from './party/party-consulting/party-consulting.component';
import { RoundContinuingComponent } from './round/round-continuing/round-continuing.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'partie/nouvelle', component:PartyAddingComponent},
  {path:'partie/:id/continuer', component:RoundContinuingComponent},
  {path:'partie/:id', component:PartyConsultingComponent},
  {path:'apropos', component:AboutComponent},
  {path:'', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
