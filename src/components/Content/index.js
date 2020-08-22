import React, { useEffect } from "react";
import "./index.less";
import { GlitchText, Ship } from "@components/GlitchText";

function Content({ handleKeyDown }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="intro center-this">
      <Ship type="large" />
      <div className="flex-hz">
        <GlitchText type="large" text="Void Dodge" />
      </div>
      <div className="title">A tiny javascript game</div>
      <div className="sub-title">Press any key to start</div>
    </div>
  );
}

export default Content;
