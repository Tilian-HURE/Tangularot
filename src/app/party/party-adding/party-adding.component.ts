import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Party } from 'src/app/resources/party';
import { PartyService } from 'src/app/services/party.service';
import { Router } from '@angular/router';
import { Tools } from 'src/app/resources/tools';


@Component({
  selector: 'app-partie-adding',
  templateUrl: './party-adding.component.html',
  styleUrls: ['./party-adding.component.css']
})


export class PartyAddingComponent {

  public party: Party = new Party(); // bound to the form

  constructor(
    private partyService: PartyService,
    private router: Router
  ) {}

  /**
   * Sets the new party ID and label when initializing.
   */
  private ngOnInit(): void {
    this.partyService.getParties().subscribe({
      next: parties => {
        this.party.id = (parties.length > 0 ? parties[parties.length - 1].id + 1 : 0);
        this.party.label = "Partie n°" + (parties.length > 0 ? this.party.id : 1);
      },
      error: e => {
        console.log("Error when getting the data from the JSON database.");
        // @ts-ignore
        document.querySelector(".alert1").style.display = "block";
      }
    });
  }

  /**
   * Adds the new party data in the JSON database if the completed form is valid.
   * @param partyAddingForm: completed form
   */
  public onSubmit(partyAddingForm: NgForm): void {
    if (partyAddingForm.valid) {
      this.party.startingDate = Tools.getCurrentStringDate();
      this.partyService.addParty(this.party).subscribe({
        next: success => this.router.navigateByUrl("").then(() => location.reload()),
        error: e => {
          console.log("Error when adding the data to the database.");
          // @ts-ignore
          document.querySelector(".alert2").style.display = "block";
        }
      });
    }
  }

}
