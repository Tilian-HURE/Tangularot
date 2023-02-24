import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Party } from 'src/app/resources/party';


@Component({
  selector: 'app-partie-adding',
  templateUrl: './party-adding.component.html',
  styleUrls: ['./party-adding.component.css']
})


export class PartyAddingComponent {

  public partie: Party = new Party();

  public onSubmit(formulaire: NgForm): void {
    // TODO
  }

}
