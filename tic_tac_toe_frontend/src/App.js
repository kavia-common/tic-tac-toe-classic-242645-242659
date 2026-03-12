import React from "react";
import Board from "./components/Board";
import StatusBanner from "./components/StatusBanner";
import { useTicTacToe } from "./hooks/useTicTacToe";
import "./styles/app.css";

function App() {
  const { board, currentPlayer, winner, isDraw, winningLine, statusText, playAt, restart } =
    useTicTacToe();

  return (
    <div className="appRoot">
      <main className="appShell" role="main" aria-label="Tic Tac Toe">
        <header className="appHeader">
          <div>
            <h1 className="appTitle">Tic Tac Toe</h1>
            <p className="appSubtitle">Two local players. First to three in a row wins.</p>
          </div>

          <button type="button" className="btn btnPrimary" onClick={restart}>
            Restart
          </button>
        </header>

        <StatusBanner
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
          statusText={statusText}
        />

        <section className="boardSection" aria-label="Game board">
          <Board squares={board} onPlay={playAt} winningLine={winningLine} disabled={!!winner || isDraw} />
        </section>

        <footer className="appFooter">
          <small>
            Theme: <span className="pill">Soft Gray</span>
          </small>
        </footer>
      </main>
    </div>
  );
}

export default App;
