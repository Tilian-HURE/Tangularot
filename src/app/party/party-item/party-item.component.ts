import { Component, Input } from '@angular/core';
import { Party } from 'src/app/resources/party';
import { Tools } from 'src/app/resources/tools';


@Component({
  selector: 'app-partie-item',
  templateUrl: './party-item.component.html',
  styleUrls: ['./party-item.component.css']
})


export class PartyItemComponent {

  @Input()
  public party: Party = new Party();
  public lastRoundTimeLabel: string = "";

  private ngOnInit(): void {
    this.lastRoundTimeLabel = (this.party.rounds.length > 0 ?
        Tools.getLatestTimeLabel(this.party.rounds[this.party.rounds.length - 1].date)
        : "Ajourd'hui"
    );
  }
}
