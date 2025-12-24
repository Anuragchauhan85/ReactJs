import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: moves.blue += 1 };
        });

        setArr((prevArr)=>{return[...prevArr,", blue moves"]})
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, Yellow: moves.yellow += 1 };
        });
    };

    return (
      <div>
            <p>Game Begins</p>
            <p>{ arr}</p>
        <div className="board">
          <p>Blue move= {moves.blue}</p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
            +1
          </button>
          <p>yellow move= {moves.yellow}</p>
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={updateYellow}
          >
            +1
          </button>
          <p>Green move= {moves.green}</p>
          <button style={{ backgroundColor: "green" }}>+1</button>
          <p>Red move= {moves.red}</p>
          <button style={{ backgroundColor: "red" }}>+1</button>
        </div>
      </div>
    );
}