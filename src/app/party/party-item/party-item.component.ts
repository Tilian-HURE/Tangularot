import { Component, Input } from '@angular/core';
import { Party } from 'src/app/resources/party';
import { Tools } from 'src/app/resources/tools';
import { PartyService } from 'src/app/services/party.service';


@Component({
  selector: 'app-partie-item',
  templateUrl: './party-item.component.html',
  styleUrls: ['./party-item.component.css']
})


export class PartyItemComponent {

  @Input()
  public party: Party = new Party();
  public latestTimeLabel: string = "";

  constructor(
    private partyService: PartyService,
  ) {}

  /**
   * Sets the label showing the latest time the party has been consulted.
   */
  private ngOnInit(): void {
    this.latestTimeLabel = (this.party.rounds.length > 0 ?
      Tools.getLatestTimeLabel(this.party.rounds[this.party.rounds.length-1].date) :
        Tools.getLatestTimeLabel(this.party.startingDate));
  }

  /**
   * Shows the dialog ensuring that a party might be removed.
   */
  public startRemovingDialog(): void {
    // @ts-ignore
    document.getElementById(this.party.id).style.display = "flex";
  }

  /**
   * Hides the dialog ensuring that a party might be removed.
   */
  public cancelRemovingDialog(): void {
    // @ts-ignore
    document.getElementById(this.party.id).style.display = "none";
  }

  /**
   * Calls the service function to remove the party from the JSON database.
   */
  public removeParty(): void {
    this.partyService.removeParty(this.party.id).subscribe({
      next: success => {
        location.reload(); // refreshes the application to update its content
      },
      error: e => console.log("Error when deleting the data from the JSON database.") // TODO
    });
  }

}
