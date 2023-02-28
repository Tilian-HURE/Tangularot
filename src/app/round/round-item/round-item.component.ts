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

  /**
   * Show a dialog detailing all the round's data.
   */
  public startInfoDialog(): void {
    // @ts-ignore
    document.getElementById(this.round.number).classList.replace("hide", "show");
  }

  /**
   * Closes the dialog detailing all the round's data.
   */
  public closeInfoDialog(): void {
    // @ts-ignore
    document.getElementById(this.round.number).classList.replace("show", "hide");
  }

}
