import React, { useState, useEffect, useMemo, useCallback } from "react";
import retro from "@assests/retro.mp3";
import * as styles from "./index.module.less";

import iconPlay from "@images/icon_play.png";
import iconPause from "@images/icon_pause.png";

function Music() {
  const audio = useMemo(() => new Audio(retro), []);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((value) => !value);
  const init = useCallback(() => {
    setPlaying(true);
    document.removeEventListener("keydown", init);
  });

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing]);

  useEffect(() => {
    document.addEventListener("keydown", init);
    return () => document.removeEventListener("keydown", init);
  }, []);

  return (
    <div className={styles.music}>
      <div>
        <button onClick={toggle}>
          {playing ? (
            <img src={iconPause} alt="||" />
          ) : (
            <img src={iconPlay} alt=">" />
          )}
        </button>
      </div>
      <div className={styles.label}>
        &quot;A Bit Of Hope&quot; by David Fesliyan
      </div>
    </div>
  );
}

export default React.memo(Music);
