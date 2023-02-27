import { Component, Input } from '@angular/core';
import { Round } from "src/app/resources/round";


@Component({
  selector: 'app-round-item',
  templateUrl: './round-item.component.html',
  styleUrls: ['./round-item.component.css']
})


export class RoundItemComponent {

  @Input()
  public round: Round = new Round();

}
