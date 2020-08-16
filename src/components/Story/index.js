import React from "react";
import * as styles from "./index.module.less";

function Story() {
  return (
    <div className={styles.about}>
      <div className={styles.sub}>
        And I am{" "}
        <a href={"https://kailash-sankar.github.io/#/"}>Kailash Sankar</a>, a
        web developer.
        <br />
      </div>
    </div>
  );
}

export default Story;
export { default as Social } from "./Social";
