import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public partyIDEvent = new EventEmitter<number>();

  public latestTimeLabel: string = "";

  /**
   * Sets the label showing the latest time the party has been consulted.
   */
  private ngOnInit(): void {
    this.latestTimeLabel = (this.party.rounds.length > 0 ?
      Tools.getLatestTimeLabel(this.party.rounds[this.party.rounds.length-1].date) :
        Tools.getLatestTimeLabel(this.party.startingDate));
  }

  /**
   * Calls the methode that shows the dialog which ensure that
   *  a party might be removed in the parent component.
   */
  callDialogInParent() {
    this.partyIDEvent.emit(this.party.id);
  }

}
