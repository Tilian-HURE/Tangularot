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
    public bettingPlayer: any = {"name":"", "key":""},
    public bet: Bet = 1,
    public nbOudlers: number = 0,
    public petitAuBout: boolean = false,
    public bonus: Bonus | null = 0,
    public scores = {"player1":0, "player2":0, "player3":0, "player4":0}
  ) {}

}
