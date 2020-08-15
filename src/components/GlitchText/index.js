import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./index.less";
import iconShip from "@images/icon_ship.png";

function GlitchText({ text, type = "default" }) {
  const [txt, setTxt] = useState("");

  useEffect(() => {
    const txtList = text.split("");
    let interval;
    // typing effect
    interval = setInterval(() => {
      if (txtList.length) {
        setTxt((txt) => txt + txtList.shift());
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return <div className={classnames("funky-txt", type)}>{txt}</div>;
}

function Blinker({ type = "default" }) {
  return <div className={classnames("console", type)}><img src={iconShip} alt="<fly-high>" /></div>;
}

export { GlitchText, Blinker };
