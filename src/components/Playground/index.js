import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Space from "./Space";
import Ship from "./Ship";
import Score from "./Score";

import * as styles from "./index.module.less";

let i = 0;
const voidGenInterval = 1 * 2000;
const voidRemoveDelay = 1 * 8000;

function Playground() {
  const [voids, setVoids] = useState([]);

  useEffect(() => {
    const addIntervalId = setInterval(() => {
      i++;
      setVoids((voids) => [
        ...voids,
        <Space key={`space-${i}`} id={`space-${i}`} />,
      ]);
    }, voidGenInterval);

    let removeIntervalId;
    const timeoutId = setTimeout(() => {
      removeIntervalId = setInterval(() => {
        setVoids((voids) => voids.slice(1));
      }, voidGenInterval);
    }, voidRemoveDelay);

    return () => {
      clearInterval(addIntervalId);
      clearInterval(removeIntervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={classnames(styles.playground, "center-this")}>
      <Space />
      {voids}
      <Ship />
      <Score />
    </div>
  );
}

export default Playground;
