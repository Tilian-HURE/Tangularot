import { Component } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import { Party } from 'src/app/resources/party';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  public parties: Party[] = [];

  constructor(
    private partyService: PartyService
  ) {}

  /**
   * Gets the observable parties from the JSON database.
   */
  private ngOnInit(): void {
    this.partyService.getParties().subscribe({
      next: parties => this.parties = parties,
      error: e => console.log("Error when getting the party from the JSON database.") // TODO
    });
  }

}
