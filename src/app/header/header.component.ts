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

  // TODO
  private ngOnInit(): void {
    console.log("init");
    this.partyService.getParties().subscribe(parties => this.parties = parties);
  }

}
