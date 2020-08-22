import React, { useEffect } from "react";
import { GlitchText, Ship } from "@components/GlitchText";
import { useSelector } from "react-redux";
import { summaryStateSelector } from "@store/gameReducer";
import "./index.less";

function Score({ entry }) {
  return (
    <tr className="score-row">
      <td>{entry.value}</td>
      <td>{new Date(entry.ts).toLocaleString()}</td>
    </tr>
  );
}

function ScoreBoard({ scores }) {
  const { recent, top } = scores;

  return (
    <div className="score-board">
      <div className="title">Score Board</div>

      <table>
        <thead>
          <tr>
            <td colSpan="2">Recent Score</td>
          </tr>
        </thead>
        <tbody>
          {recent.map((row, idx) => (
            <Score entry={row} idx={idx} key={idx + "-" + row.ts} />
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td colSpan="2">Top Score</td>
          </tr>
        </thead>
        <tbody>
          <Score entry={top} />
        </tbody>
      </table>

      <div className="sub-title">Press any key to continue</div>
    </div>
  );
}

function GameOver({ handleKeyDown }) {
  const scoreStore = useSelector(summaryStateSelector);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="intro center-this">
      <Ship type="large" />
      <div className="flex-hz">
        <GlitchText type="large" text="Game Over" />
      </div>
      {scoreStore ? <ScoreBoard scores={scoreStore} /> : null}
    </div>
  );
}

export default GameOver;
