import React, { useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "./index.module.less";
import { shipPosSelector, actions } from "@store/gameReducer";
import { shipSize } from "@utils/constants";

import iconAstro1 from "@images/icon_astro1.png";
import iconAstro2 from "@images/icon_astro2.png";
import iconAstro3 from "@images/icon_astro3.png";
import iconAstro4 from "@images/icon_astro4.png";
import iconAstro5 from "@images/icon_astro5.png";

const maxItems = 8;
const astroIcons = [iconAstro1, iconAstro2, iconAstro3, iconAstro4, iconAstro5];

function generateGapIndexes() {
  let limit = 1 + Math.floor(Math.random() * 4);
  const gapsIdx = [];
  while (limit > 0) {
    gapsIdx.push(Math.floor(Math.random() * maxItems));
    limit--;
  }
  return gapsIdx;
}

function Gap() {
  return <div className={styles.gap}></div>;
}

function Fill() {
  return (
    <div className={styles.fill}>
      <img
        src={astroIcons[Math.floor(Math.random() * astroIcons.length)]}
        alt="-"
      />
    </div>
  );
}

function Space() {
  const shipPos = useSelector(shipPosSelector);
  const dispatch = useDispatch();
  const spaceRef = useRef();

  const { field, fillPoints } = useMemo(() => {
    const gapsIdx = generateGapIndexes();
    const field = [];
    const fillPoints = [];

    for (let i = 0; i < maxItems; i++) {
      if (gapsIdx.includes(i)) {
        field.push(<Gap key={`gap-${i}`} />);
      } else {
        field.push(<Fill key={`fill-${i}`} />);
        fillPoints.push(i * shipSize);
      }
    }
    return { field, fillPoints };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        spaceRef.current.offsetTop >= 320 &&
        spaceRef.current.offsetTop <= 384
      ) {
        if (fillPoints.includes(shipPos)) {
          dispatch(actions.endGame());
        } else {
          dispatch(actions.updateScore());
          clearInterval(intervalId);
        }
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, [shipPos]);

  return (
    <div ref={spaceRef} className={styles.space}>
      {field}
    </div>
  );
}

export default Space;
