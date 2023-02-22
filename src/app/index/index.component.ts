import { Component } from '@angular/core';
import { Partie } from 'src/app/resources/partie';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent {

  parties: Partie[] = [];

}
