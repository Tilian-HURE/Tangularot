import { Component } from '@angular/core';
import { Party, PartyState } from 'src/app/resources/party';
import { Round } from 'src/app/resources/round';
import { PartyService } from 'src/app/services/party.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Tools } from "src/app/resources/tools";
import { max } from 'rxjs';


@Component({
  selector: 'app-round-adding',
  templateUrl: './round-continuing.component.html',
  styleUrls: ['./round-continuing.component.css']
})


export class RoundContinuingComponent {

  // Bound to the form
  public party: Party = new Party();
  public round: Round = new Round();
  public bettingPlayerGivenScore: number = 0;
  public playerWhoBet = {"player1":false, "player2":false, "player3":false, "player4":false};

  constructor(
    private partyService: PartyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Sets the current party and the round when initializing.
   */
  private ngOnInit(): void {
    const partyID: number = this.activatedRoute.snapshot.params["id"];
    this.partyService.getParty(partyID).subscribe({
      next: party => {
        this.party = party;
        this.round.number = this.party.rounds.length + 1;
        this.party.rounds.forEach((round: Round) => {
          switch (round.bettingPlayer.key) {
            case "player1":
              this.playerWhoBet.player1 = true;
              break;
            case "player2":
              this.playerWhoBet.player2 = true;
              break;
            case "player3":
              this.playerWhoBet.player3 = true;
              break;
            case "player4":
              this.playerWhoBet.player4 = true;
              break;
          }
        })
      },
      error: e => this.router.navigateByUrl("")
    });
  }

  /**
   * Adds the new round data in the JSON database if the completed form is valid.
   * @param roundContinuingForm: completed form
   */
  public onSubmit(roundContinuingForm: NgForm): void {
    if (roundContinuingForm.valid) {
      const partyID: number = this.activatedRoute.snapshot.params["id"];
      switch (this.round.bettingPlayer.key) {
        case "player1":
          this.round.bettingPlayer.name = this.party.playersName.player1;
          break;
        case "player2":
          this.round.bettingPlayer.name = this.party.playersName.player2;
          break;
        case "player3":
          this.round.bettingPlayer.name = this.party.playersName.player3;
          break;
        case "player4":
          this.round.bettingPlayer.name = this.party.playersName.player4;
          break;
      }
      this.round.date = Tools.getCurrentStringDate();
      this.party.rounds[(this.party.rounds.length > 0 ? this.party.rounds.length : 0)] = this.round;
      if (this.party.rounds.length == 4) {
        this.party.state = PartyState.DONE;
        this.party.endingDate = this.round.date;
      }
      this.partyService.updateParty(partyID, this.party).subscribe({
        next: success => this.router.navigateByUrl("/partie/" + partyID),
        error: e => console.log("Error when updating data in the database:\n" + e)
      });
    }
  }

}
