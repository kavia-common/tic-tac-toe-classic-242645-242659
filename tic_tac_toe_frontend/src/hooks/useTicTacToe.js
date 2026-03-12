import { useMemo, useState } from "react";
import { calculateWinner } from "../utils/calculateWinner";

/**
 * PUBLIC_INTERFACE
 * useTicTacToe encapsulates all game state and rules for a local 2-player Tic Tac Toe game.
 */
export function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const { winner, winningLine } = useMemo(() => calculateWinner(board), [board]);

  const isDraw = useMemo(() => !winner && board.every((s) => s !== null), [board, winner]);

  const statusText = useMemo(() => {
    if (winner) return `${winner} wins!`;
    if (isDraw) return "It's a draw.";
    return `${currentPlayer}'s turn`;
  }, [currentPlayer, winner, isDraw]);

  const playAt = (index) => {
    // Guard against invalid indices
    if (index < 0 || index >= 9) return;
    // No moves after game ends
    if (winner || isDraw) return;
    // Ignore moves on occupied squares
    if (board[index]) return;

    setBoard((prev) => {
      const next = [...prev];
      next[index] = currentPlayer;
      return next;
    });
    setCurrentPlayer((p) => (p === "X" ? "O" : "X"));
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  return {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    statusText,
    playAt,
    restart,
  };
}
