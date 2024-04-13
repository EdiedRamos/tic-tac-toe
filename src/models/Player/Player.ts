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

  public wins() {
    this.score++;
  }
}
