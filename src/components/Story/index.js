import React from "react";
import * as styles from "./index.module.less";

function Story() {
  return (
    <div className={styles.about}>
      <div className={styles.sub}>
        I am <a href={"https://kailash-sankar.github.io/#/"}>Kailash Sankar</a>,
        a web developer.
        <br />
      </div>
      <div className={styles.sub}>
        Game icons are from{" "}
        <a href="https://www.iconfinder.com/iconsets/space-82">IconFinder</a>
      </div>
      <div className={styles.sub}>
        Music is from{" "}
        <a href="https://www.fesliyanstudios.com/">fesliyanstudios</a>
      </div>
    </div>
  );
}

export default Story;
export { default as Social } from "./Social";
