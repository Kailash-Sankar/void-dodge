import React, { useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "./index.module.less";
import { shipPosSelector, actions } from "@store/gameReducer";
import { shipSize } from "@utils/constants";

const maxItems = 8;

function generateGapIndexes(limit = 4) {
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
  return <div className={styles.fill}></div>;
}

function Space() {
  const gapsIdx = generateGapIndexes();
  const shipPos = useSelector(shipPosSelector);
  const dispatch = useDispatch();

  const spaceRef = useRef();

  const { field, fillPoints } = useMemo(() => {
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
          dispatch(actions.setGameOver(2));
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
