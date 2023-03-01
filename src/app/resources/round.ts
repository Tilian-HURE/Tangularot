export enum Bet {
  PETITE = 1, GARDE= 2, GARDE_SANS = 4, GARDE_AVEC = 6
}

export enum Bonus {
  SIMPLE = 20, DOUBLE = 30, TRIPLE = 40
}


export class Round {

  constructor(
    public number: number = 0,
    public date: string = "",
    public bettingPlayer: {index:number, name:string} = {"index":0, "name":""},
    public bet: Bet = 1,
    public nbOudlers: number = 0,
    public petitAuBout: boolean = false,
    public bonus: Bonus = 0,
    public bettingPlayerOriginalScore: number = 0,
    public scores: number[] = [0, 0, 0, 0],
    public previousRoundScores: number[] = [0, 0, 0, 0]
  ) {}

}
