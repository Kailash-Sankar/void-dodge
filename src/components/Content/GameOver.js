import React, { useEffect } from "react";
import { GlitchText, Blinker } from "@components/GlitchText";
import { useSelector } from "react-redux";
import { scoreSelector } from "@store/gameReducer";
import "./index.less";

function GameOver({ handleKeyDown }) {
  const score = useSelector(scoreSelector);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="intro center-this">
      <Blinker type="large" />
      <div className="flex-hz">
        <GlitchText type="large" text="Game Over" />
      </div>
      <div className="sub-title">Score: {score} </div>
      <div className="sub-title">Press &quot;anykey&quot; to continue</div>
    </div>
  );
}

export default GameOver;
