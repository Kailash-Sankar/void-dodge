import React from "react";
import * as styles from "./index.module.less";

function RefLink({ href, text }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  );
}

function Story() {
  return (
    <div className={styles.about}>
      <div className={styles.sub}>
        I am{" "}
        <RefLink
          href={"https://kailash-sankar.github.io/#/"}
          text="Kailash Sankar"
        />
        , a web developer.
        <br />
      </div>
      <div className={styles.sub}>
        You can find the source code here{" "}
        <RefLink
          href={"https://github.com/Kailash-Sankar/void-dodge"}
          text="void-dodge"
        />
      </div>
      <div className={styles.sub}>
        Game icons are from{" "}
        <RefLink
          href={"https://www.iconfinder.com/iconsets/space-82"}
          text="IconFinder"
        />
      </div>
      <div className={styles.sub}>
        Music is from{" "}
        <RefLink
          href={"https://www.fesliyanstudios.com/"}
          text="fesliyanstudios"
        />
      </div>
    </div>
  );
}

export default Story;
export { default as Social } from "./Social";
