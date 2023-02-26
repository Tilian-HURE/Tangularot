import { Component } from '@angular/core';
import { Party, PartyState } from 'src/app/resources/party';
import { Observable } from 'rxjs';
import { PartyService } from 'src/app/services/party.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent {

  public parties!: Observable<Party[]>;
  public nbParties = {"totalNbParties":0,
                       "nbInProgressParties":0,
                       "nbDoneParties":0}

  constructor(
    private partyService: PartyService
  ) {}

  /**
   * Gets the observed parties from the JSON database
   *  and sets the numbers of parties when initializing.
   */
  private ngOnInit(): void {
    this.parties = this.partyService.getParties();
    this.parties.subscribe(OP => (
      OP.forEach((party: Party) => {
        if (party.state == PartyState.IN_PROGRESS) {
          this.nbParties.nbInProgressParties++;
        } else {
          this.nbParties.nbDoneParties++;
        }
        this.nbParties.totalNbParties++;
      })
    ));
  }

}
