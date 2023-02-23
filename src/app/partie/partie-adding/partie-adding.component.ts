import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Partie } from 'src/app/resources/partie';


@Component({
  selector: 'app-partie-adding',
  templateUrl: './partie-adding.component.html',
  styleUrls: ['./partie-adding.component.css']
})


export class PartieAddingComponent {

  partie: Partie = new Partie();

  onSubmit(formulaire: NgForm): void {
    // TODO
  }

}
