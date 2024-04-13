import type { MarkType, PlayerLabel, PlayerType } from "@/types";

export class Player {
  private label: PlayerLabel;
  private type: PlayerType;
  private score: number;
  private mark: MarkType;

  constructor(
    label: PlayerLabel,
    type: PlayerType,
    mark: MarkType,
    score: number = 0
  ) {
    this.label = label;
    this.type = type;
    this.score = score;
    this.mark = mark;
  }

  set setMark(mark: MarkType) {
    this.mark = mark;
  }

  get getLabel() {
    return this.label;
  }

  get getType() {
    return this.type;
  }

  get getScore() {
    return this.score;
  }

  get getMark() {
    return this.mark;
  }

  // * NO MUTATION METHODS

  public setScore(score: number): Player {
    const newPlayer = new Player(this.label, this.type, this.mark, score);
    return newPlayer;
  }

  public wins(): Player {
    return this.setScore(this.score + 1);
  }

  public updateTypeAndMark(type: PlayerType, mark: MarkType): Player {
    const newPlayer = new Player(this.label, type, mark);
    return newPlayer;
  }

  public updateMark(mark: MarkType): Player {
    return this.updateTypeAndMark(this.type, mark);
  }

  // * STATIC METHODS

  public static createBasePlayerA(): Player {
    return new Player("playerA", "human", "x");
  }

  public static createBasePlayerB(): Player {
    return new Player("playerB", "human", "o");
  }
}
