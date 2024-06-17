export type Level = "easy" | "medium" | "hard";

export class Machine {
  private level: Level;

  constructor(level: Level) {
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  public async makeMove(board: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
      let move: number = -1;
      if (this.level === "easy") {
        // * random approach
        const freeSquares = board
          .map((square, index) => (~square ? -1 : index))
          .filter((square) => ~square);
        if (freeSquares.length === 0) reject("Impossible to make the move");
        move = freeSquares[Math.floor(Math.random() * freeSquares.length)];
      }
      if (this.level === "medium") {
        // ! Pending
        // * take between easy and hard
      }
      if (this.level === "hard") {
        // ! Pending
        // * minimax approach
      }
      resolve(move);
    });
  }
}

export const machine = new Machine("easy");
