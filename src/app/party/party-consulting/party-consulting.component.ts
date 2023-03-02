import { Component } from '@angular/core';
import { Party } from 'src/app/resources/party';
import { Round } from 'src/app/resources/round';
import { PartyService } from 'src/app/services/party.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-partie',
  templateUrl: './party-consulting.component.html',
  styleUrls: ['./party-consulting.component.css']
})


export class PartyConsultingComponent {

  public party: Party = new Party();
  public rounds: Round[] = [];
  public seeMoreRound: Round = new Round();
  public difference: number = 0;

  constructor(
    private partyService: PartyService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Gets the consulted party and the observable rounds from the
   *  JSON database when initializing.
   */
  private ngOnInit(): void {
    const partyID: number = this.activeRoute.snapshot.params["id"];
    this.partyService.getParty(partyID).subscribe({
      next: party => {
        this.party = party;
        this.rounds = this.party.rounds;
      },
      error: e => this.router.navigateByUrl("")
    });
  }

  /**
   * Sets the round to show in the info dialog from the event that has been sent
   *  from the child component, shows the dialog detailing all the round's data,
   *  and calculates the difference between the betting player's score and the
   *  score corresponding to the number of oudlers gotten.
   * @param $roundNumber: round number of the round to set
   */
  public startInfoDialog($roundNumber: number): void {
    this.seeMoreRound = this.party.rounds[$roundNumber-1];
    this.difference = this.seeMoreRound.bettingPlayerOriginalScore - [56, 51, 41, 36][this.seeMoreRound.nbOudlers];
    // @ts-ignore
    document.querySelector(".modal").style.display = "block";
  }

  /**
   * Closes the dialog detailing all the round's data.
   */
  public closeInfoDialog(): void {
    // @ts-ignore
    document.querySelector(".modal").style.display = "none";
  }

}
