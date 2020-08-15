import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./config";

import * as styles from "./index.module.less";

function ParticleWrapper() {
  return (
    <div id="particle_wrapper" className={styles.wrapper}>
      <Particles height="99vh" width="99vw" params={particleConfig} />
    </div>
  );
}

export default ParticleWrapper;
