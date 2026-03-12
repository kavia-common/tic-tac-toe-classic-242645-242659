import React from "react";
import Square from "./Square";
import "../styles/board.css";

/**
 * PUBLIC_INTERFACE
 * Board renders the 3x3 grid and delegates each cell to Square.
 */
export default function Board({ squares, onPlay, winningLine, disabled }) {
  const isWinningIndex = (idx) => Array.isArray(winningLine) && winningLine.includes(idx);

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe grid">
      {squares.map((value, idx) => (
        <Square
          key={idx}
          value={value}
          index={idx}
          onClick={() => onPlay(idx)}
          isWinning={isWinningIndex(idx)}
          disabled={disabled || Boolean(value)}
        />
      ))}
    </div>
  );
}
