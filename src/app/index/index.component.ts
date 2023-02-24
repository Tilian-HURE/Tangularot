import {Component} from '@angular/core';
import {Party, PartyStat} from 'src/app/resources/party';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent {

  public parties: Party[] = [];

  private getNbParties(partiesStat: PartyStat) {
    let nbParties: number = 0;
    this.parties.forEach(function (partie: Party) {
      if (!partiesStat || partie.stat == partiesStat) {
        nbParties++;
      }
    });
    return nbParties;
  }

  public getNbInProgressParties() {
    return this.getNbParties(PartyStat.IN_PROGRESS);
  }

  public getNbDoneParties() {
    return this.getNbParties(PartyStat.DONE);
  }

}
