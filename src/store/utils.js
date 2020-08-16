import { playgroundSize, shipSize } from "@utils/constants";

// utilites for store
export const applyScope = (scope, types) =>
  Object.fromEntries(types.map((type) => [type, `${scope}/${type}`]));

export const calcShipPos = (pos, move) => {
  switch (move) {
    case "ArrowLeft":
      if (pos > playgroundSize.left) {
        pos = pos - shipSize;
      }
      break;
    case "ArrowRight":
      if (pos < playgroundSize.right) {
        pos = pos + shipSize;
      }
      break;
  }
  return pos;
};
