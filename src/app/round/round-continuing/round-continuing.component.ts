import { Component } from '@angular/core';
import { Party, PartyState } from 'src/app/resources/party';
import { Round } from 'src/app/resources/round';
import { PartyService } from 'src/app/services/party.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Tools } from "src/app/resources/tools";


@Component({
  selector: 'app-round-adding',
  templateUrl: './round-continuing.component.html',
  styleUrls: ['./round-continuing.component.css']
})


export class RoundContinuingComponent {

  // Bound to the form
  public party: Party = new Party();
  public round: Round = new Round();

  public playersWhoBet: boolean[] = [false, false, false, false];

  constructor(
    private partyService: PartyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Gets the current party and its rounds when initializing.
   */
  private ngOnInit(): void {
    const partyID: number = this.activatedRoute.snapshot.params["id"];
    this.partyService.getParty(partyID).subscribe({
      next: party => {
        this.party = party;
        if (this.party.state == PartyState.DONE) {
          this.router.navigateByUrl("partie/"+this.party.id);
        }
        this.round.number = this.party.rounds.length + 1;
        this.party.rounds.forEach((round: Round) => {
          this.playersWhoBet[round.bettingPlayer.index] = true;
        })
        for (let i=0; i < 4; i++) { // default betting player
          if (!this.playersWhoBet[i]) {
            this.round.bettingPlayer = {"index":i, "name":this.party.playersName[i]};
          }
        }
      },
      error: e => this.router.navigateByUrl("")
    });
  }

  /**
   * Calculates the score for each player according to all the given data.
   */
  private calculateScores(): void {
    const oudlersScores: number[] = [56, 51, 41, 36];
    this.round.previousRoundScores = (this.party.rounds.length > 0 ?
      this.party.rounds[this.party.rounds.length-1].scores : [0, 0, 0, 0]);
    const totalScore: number = (25+
      Math.abs(this.round.bettingPlayerOriginalScore-oudlersScores[this.round.nbOudlers])+
      (Number(this.round.petitAuBout)*10)) * Number(this.round.bet) + Number(this.round.bonus);
    // The betting player is winning
    if (this.round.bettingPlayerOriginalScore >= oudlersScores[this.round.nbOudlers]) {
      for (let i = 0; i < 4; i++) {
        this.round.scores[i] = this.round.previousRoundScores[i] + (i == this.round.bettingPlayer.index ?
          totalScore*3 : -totalScore);
      }
      // The betting player is losing
    } else {
      for (let i = 0; i < 4; i++) {
        this.round.scores[i] = this.round.previousRoundScores[i] + (i == this.round.bettingPlayer.index ?
          -totalScore*3 : totalScore);
      }
    }
  }

  /**
   * Adds the new round data in the JSON database if the completed form is valid.
   * @param roundContinuingForm: completed form
   */
  public onSubmit(roundContinuingForm: NgForm): void {
    if (roundContinuingForm.valid) {
      const partyID: number = this.activatedRoute.snapshot.params["id"];
      this.round.bettingPlayer.name = this.party.playersName[this.round.bettingPlayer.index];
      this.calculateScores();
      this.round.date = Tools.getCurrentStringDate();
      this.party.rounds[(this.party.rounds.length > 0 ? this.party.rounds.length : 0)] = this.round;
      if (this.party.rounds.length == 4) {
        this.party.state = PartyState.DONE;
        this.party.endingDate = this.round.date;
      }
      this.partyService.updateParty(partyID, this.party).subscribe({
        next: success => this.router.navigateByUrl("/partie/"+partyID),
        error: e => {
          console.log("Error when updating the data in the database.");
          // @ts-ignore
          document.querySelector(".alert").style.display = "block";
        }
      });
    }
  }

}
