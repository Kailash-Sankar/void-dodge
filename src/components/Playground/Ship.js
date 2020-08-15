import React, { useEffect, useCallback } from "react";
import iconShip from "@images/icon_ship.png";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "./index.module.less";
import { shipPosSelector, actions } from "@store/gameReducer";

function Ship() {
  const pos = useSelector(shipPosSelector);
  const dispatch = useDispatch();

  const handleKeyDown = useCallback((event) => {
    dispatch(actions.setShipPos(event.key));
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={styles.ship} style={{ left: pos }}>
      <img src={iconShip} alt="<ship>" />
    </div>
  );
}

export default Ship;
