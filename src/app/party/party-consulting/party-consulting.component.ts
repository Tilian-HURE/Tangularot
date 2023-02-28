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

  constructor(
    private partyService: PartyService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Gets the consulted party and the observed rounds from the
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

}
