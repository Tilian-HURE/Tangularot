import { Round } from 'src/app/resources/round';


export enum PartyState {
  IN_PROGRESS, DONE
}


export class Party {

  constructor(
    public id: number = 0,
    public state: PartyState = 0,
    public label: string = "",
    public startingDate: string = "",
    public endingDate: string | null = null,
    public playersName = {"player1":"",
                               "player2":"",
                               "player3":"",
                               "player4":""},
    public rounds: Round[] = []
  ) {}

}
