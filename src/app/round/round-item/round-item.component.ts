import { Component, Input } from '@angular/core';
import { Round } from "src/app/resources/round";


@Component({
  selector: 'tr[app-round-item]',
  templateUrl: './round-item.component.html',
  styleUrls: ['./round-item.component.css']
})


export class RoundItemComponent {

  @Input()
  public round: Round = new Round();
  public difference: number = 0;

  /**
   * Calculates the difference between the betting player's score
   *  and the score corresponding to the number of oudlers given.
   */
  private ngOnInit(): void {
    this.difference = this.round.bettingPlayerOriginalScore - [56, 51, 41, 36][this.round.nbOudlers];
  }

  /**
   * Shows a dialog detailing all the round's data.
   */
  public startInfoDialog(): void {
    // @ts-ignore
    document.getElementById(this.round.number).style.display = "block";
  }

  /**
   * Closes the dialog detailing all the round's data.
   */
  public closeInfoDialog(): void {
    // @ts-ignore
    document.getElementById(this.round.number).style.display = "none";
  }

}
