import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PartyAddingComponent } from './party/party-adding/party-adding.component';
import { PartyConsultingComponent } from './party/party-consulting/party-consulting.component';


const routes: Routes = [
  {path:'partie/nouvelle', component:PartyAddingComponent},
  {path:'partie/:id', component:PartyConsultingComponent},
  {path:'', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
