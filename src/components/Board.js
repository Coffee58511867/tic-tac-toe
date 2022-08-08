import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleClick(i) {
    if (square[i] !== null) {
      alert("Already Clicked");
      return;
    }

    const newSquare = square;
    newSquare[i] = currentPlayer;
    setCurrentPlayer(newSquare);
    if (currentPlayer === "X") {
      setCurrentPlayer("Y");
    } else {
      setCurrentPlayer("X");
    }
  }

  function renderSquare(i) {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  }

  function winner(square) {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 4, 7],
      [2, 5, 8],
      [0, 3, 6],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];

      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        return square[a];
      }
    }
    return null;
  }
  const winer = winner(square);
  let winning;
  if (winer) {
    winning = "Our Winner is :" + winer;
  } else if (winer === null) {
    winning = "No Winner so far";
  }

  function restartGame() {
    setSquare(Array(9).fill(null));
  }

  return (
    <>
      <h4> Current Player: {currentPlayer} </h4>{" "}
      <div className="board1">
        <div className="board">
          {" "}
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}{" "}
        </div>{" "}
        <div className="board">
          {" "}
          {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}{" "}
        </div>{" "}
        <div className="board">
          {" "}
          {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}{" "}
        </div>{" "}
      </div>{" "}
      <h1 className="winner"> {winning} </h1>
      <button onClick={restartGame} className="restart">
        Restart Game{" "}
      </button>
    </>
  );
}
export default Board;
