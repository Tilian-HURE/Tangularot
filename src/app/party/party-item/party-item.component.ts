import { Component, Input } from '@angular/core';
import { Party } from 'src/app/resources/party';
import { Tools } from 'src/app/resources/tools';
import { PartyService } from 'src/app/services/party.service';
import { Router } from '@angular/router';


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
    private router: Router
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
    document.querySelector(".modal").style.display = "flex";
  }

  /**
   * Hides the dialog ensuring that a party might be removed.
   */
  public cancelRemovingDialog(): void {
    // @ts-ignore
    document.querySelector(".modal").style.display = "none";
  }

  /**
   * Calls the service function to remove the party from the JSON database.
   */
  public removeParty(): void {
    this.partyService.removeParty(this.party.id).subscribe({
      next: success => {
        this.router.navigateByUrl("/partie/nouvelle").then(() => (
          this.router.navigateByUrl("").then(() => (
            // @ts-ignore
            document.querySelector(".toast").classList.replace("hide", "show")
          ))
        ));
      },
      error: e => console.log("Error when deleting data from the JSON database.")
    });
  }

}
