import React from "react";
import "../styles/status.css";

/**
 * PUBLIC_INTERFACE
 * StatusBanner shows the current state (turn/win/draw) in a prominent, accessible way.
 */
export default function StatusBanner({ currentPlayer, winner, isDraw, statusText }) {
  const toneClass = winner ? "statusSuccess" : isDraw ? "statusNeutral" : "statusPrimary";

  return (
    <section className={`status ${toneClass}`} aria-live="polite" aria-atomic="true">
      <div className="statusRow">
        <span className="statusLabel">{statusText}</span>
        {!winner && !isDraw ? <span className="statusPill">Turn: {currentPlayer}</span> : null}
        {winner ? <span className="statusPill">Winner: {winner}</span> : null}
        {isDraw ? <span className="statusPill">Draw</span> : null}
      </div>
    </section>
  );
}
