export type Level = "easy" | "medium" | "hard";

export class Machine {
  private level: Level;

  constructor(level: Level) {
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  // * Using random approach
  private makeEasyMove(board: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
      const freeSquares = board
        .map((square, index) => (~square ? -1 : index))
        .filter((square) => ~square);
      if (freeSquares.length === 0)
        reject("Empty board for taking a random square");
      const move = freeSquares[Math.floor(Math.random() * freeSquares.length)];
      resolve(move);
    });
  }

  public async makeMove(board: number[]): Promise<number> {
    try {
      if (this.level === "easy") {
        return await this.makeEasyMove(board);
      }
      throw new Error("Couldn't make the move");
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message);
      throw new Error("Unknown error");
    }
  }
}

export const machine = new Machine("easy");
