import React from "react";
import { useSelector } from "react-redux";
import * as styles from "./index.module.less";
import { scoreSelector } from "@store/gameReducer";

function Score() {
  const score = useSelector(scoreSelector);

  return (
    <div className={styles.score}>
      <div>Score: {score}</div>
    </div>
  );
}

export default Score;
