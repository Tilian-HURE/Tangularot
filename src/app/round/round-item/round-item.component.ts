import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Round } from 'src/app/resources/round';


@Component({
  selector: 'tr[app-round-item]',
  templateUrl: './round-item.component.html',
  styleUrls: ['./round-item.component.css']
})


export class RoundItemComponent {

  @Input()
  public round: Round = new Round();

  @Output()
  public roundNumberEvent = new EventEmitter<number>();

  /**
   * Calls the methode that sets and shows the round
   *  data dialog in the parent component.
   */
  callDialogInParent() {
    this.roundNumberEvent.emit(this.round.number);
  }

}
