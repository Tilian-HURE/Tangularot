import { Component, Input } from '@angular/core';
import { Party } from 'src/app/resources/party';


@Component({
  selector: 'app-partie-item',
  templateUrl: './party-item.component.html',
  styleUrls: ['./party-item.component.css']
})


export class PartyItemComponent {

  @Input()
  public party: Party = new Party();

}
