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
    this.partyService.getParties().subscribe(OP => {
      this.party.id = (OP.length > 0 ? OP[OP.length - 1].id + 1 : 0);
      this.party.label = "Partie n°" + (OP.length > 0 ? this.party.id : 1);
    });
  }

  /**
   * Adds the new party data in the JSON database if the completed form is valid.
   * @param partyAddingForm: completed form
   */
  public onSubmit(partyAddingForm: NgForm): void {
    if (partyAddingForm.valid) {
      this.party.startingDate = Tools.getCurrentStringDate();
      let observableAction = this.partyService.addParty(this.party);
      observableAction.subscribe({
        next: x => this.router.navigateByUrl(""),
        error: e => console.log("Error when adding data to the database:\n"+e)
      });
    }
  }

}
