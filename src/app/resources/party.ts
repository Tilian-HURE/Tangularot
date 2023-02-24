import { Round } from 'src/app/resources/round';


export enum PartyStat {
  IN_PROGRESS, DONE
}


export class Party {

  constructor(
    public id: number = 0,
    public stat: PartyStat = PartyStat.IN_PROGRESS,
    public label: string = "Partie n°" + id,
    public startingDate: string = "31/12/1999",
    public endingDate: string | null = null,
    public playersName = {"player1":"", "player2":"", "player3":"", "player4":""},
    public rounds: Round[] = []
  ) {}

}
