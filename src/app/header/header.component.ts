import { Component } from '@angular/core';
import { PartyService } from 'src/app/services/party.service';
import { Party } from 'src/app/resources/party';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  public parties: Party[] = [];

  constructor(
    private partyService: PartyService,
    public router: Router
  ) {}

  /**
   * Gets the observable parties from the JSON database.
   */
  private ngOnInit(): void {
    this.partyService.getParties().subscribe({
      next: parties => this.parties = parties
    });
  }

  /**
   * Refreshes the current page to load the party selected in the list of th parties.
   * @param id: ID of the party to load
   */
  switchParty(id: number) {
    this.router.navigateByUrl('').then(() =>
      this.router.navigateByUrl('partie/'+id)
    );
  }

}
