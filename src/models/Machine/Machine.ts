export type Level = "easy" | "medium" | "hard";

export class Machine {
  private level: Level;

  constructor(level: Level) {
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  public async makeMove(): Promise<number> {
    return new Promise((resolve) => resolve(1));
  }
}
