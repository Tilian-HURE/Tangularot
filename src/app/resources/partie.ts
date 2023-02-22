import { Player } from 'src/app/resources/player';
import { Round } from 'src/app/resources/round';


export class Partie {

  constructor(
    public id: number = 0,
    public label: string = "Nouvelle partie",
    public startingDate: string = "31/12/1999",
    public endingDate: string | null = null,
    public players: Player[] = [],
    public rounds: Round[] = []
  ) {}

}
