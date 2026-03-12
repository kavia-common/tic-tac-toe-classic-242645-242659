import React from "react";
import "../styles/square.css";

/**
 * PUBLIC_INTERFACE
 * Square is a single cell button within the board.
 */
export default function Square({ value, index, onClick, isWinning, disabled }) {
  const ariaLabel = value ? `Square ${index + 1}, ${value}` : `Square ${index + 1}, empty`;

  return (
    <button
      type="button"
      className={`square ${isWinning ? "squareWinning" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className={`squareMark ${value === "X" ? "markX" : value === "O" ? "markO" : ""}`}>
        {value || ""}
      </span>
    </button>
  );
}
