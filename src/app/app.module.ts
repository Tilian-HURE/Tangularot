import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { PartyConsultingComponent } from './party/party-consulting/party-consulting.component';
import { PartyItemComponent } from './party/party-item/party-item.component';
import { PartyAddingComponent } from './party/party-adding/party-adding.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    PartyConsultingComponent,
    PartyItemComponent,
    PartyAddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
