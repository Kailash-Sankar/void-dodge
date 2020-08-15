import React from "react";
import classnames from "classnames";
import * as styles from "./index.module.less";
import { GlitchText, Blinker } from "@components/GlitchText";

const Spinner = () => (
  <div className={classnames(styles.spin, "center-this")}></div>
);

function Loader({ loading = false, error = false, children }) {
  if (loading || error) {
    return (
      <div className={styles.overlay}>
        <Spinner />
        {error ? <div>An error occured</div> : ""}
      </div>
    );
  }

  return children;
}

function PageNotFound() {
  return (
    <div className={styles.overlay}>
      <div className="center-this">
        <h2>Are you lost?</h2>
        <GlitchText type="large">404</GlitchText>
        <Blinker />
      </div>
    </div>
  );
}

export default Loader;
export { Spinner, PageNotFound };
