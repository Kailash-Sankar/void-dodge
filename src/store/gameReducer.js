import update from "immutability-helper";
import { applyScope } from "./utils";
import { createSelector } from "reselect";
import { playgroundSize, shipSize, startPos } from "@utils/constants";

const initialState = {
  shipPos: startPos,
  score: 0,
  gameOver: 0,
};

const scope = "game";

export const types = applyScope(scope, [
  "INIT",
  "SET_SHIP_POS",
  "UPDATE_SCORE",
  "SET_GAME_OVER",
  "RESET_GAME",
]);

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHIP_POS: {
      let pos = state.shipPos;
      switch (action.move) {
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
      return update(state, {
        shipPos: { $set: pos },
      });
    }
    case types.UPDATE_SCORE:
      return update(state, {
        score: { $set: state.score + 1 },
      });
    case types.SET_GAME_OVER:
      return update(state, {
        gameOver: { $set: action.state },
      });
    case types.RESET_GAME:
      return update(state, {
        gameOver: { $set: 0 },
        score: { $set: 0 },
      });
  }
  return state;
};

export const actions = {
  init: () => ({ type: types.INIT }),
  setShipPos: (move) => ({
    type: types.SET_SHIP_POS,
    move,
  }),
  updateScore: () => ({
    type: types.UPDATE_SCORE,
  }),
  setGameOver: (state) => ({
    type: types.SET_GAME_OVER,
    state,
  }),
  resetGame: () => ({
    type: types.RESET_GAME,
  }),
};

const selector = (state) => state[scope];
export const shipPosSelector = createSelector(
  selector,
  (state) => state.shipPos
);
export const scoreSelector = createSelector(selector, (state) => state.score);
export const gameOverSelector = createSelector(
  selector,
  (state) => state.gameOver
);

export default gameReducer;
