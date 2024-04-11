// TODO: Implement this

// import { createContext } from "react";

// interface GameContextI {}

// const [board, setBoard] = useState<Array<number>>(Array(9).fill(-1));
//   const [turn, setTurn] = useState<boolean>(false);
//   const [arePlaying, setArePlaying] = useState(true);
//   const [gameLabel, setGameLabel] = useState<string>("...");
//   const [wins, setWins] = useState(0);
//   const [loses, setLoses] = useState(0);
//   const [draw, setDraw] = useState(0);

// const handleSelect = (selectedIndex: number) => {
//   setBoard((prev) =>
//     prev.map((val, index) => (index === selectedIndex ? (turn ? 1 : 0) : val))
//   );
//   setTurn((prev) => !prev);
// };

// useEffect(() => {
//   const winner = isThereAWinner(board);
//   if (~winner) {
//     setGameLabel(`Gano ${winner === 0 ? "O" : "X"}`);
//     if (winner === 0) setWins((prev) => prev + 1);
//     else setLoses((prev) => prev + 1);
//     setArePlaying(false);
//   } else if (!board.some((value) => value === -1)) {
//     setGameLabel("Empate");
//     setDraw((prev) => prev + 1);
//     setArePlaying(false);
//   }
// }, [board]);

// const isThereAWinner = (board: Array<number>): number => {
//   for (const move of WINNING_MOVES) {
//     const [a, b, c] = move;
//     if (board[a] === board[b] && board[b] === board[c] && ~board[a]) {
//       return board[a];
//     }
//   }
//   return -1;
// };

export const GameContext = () => {
  return {};
};
