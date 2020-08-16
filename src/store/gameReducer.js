import update from "immutability-helper";
import { applyScope, calcShipPos } from "./utils";
import { createSelector } from "reselect";
import { startPos } from "@utils/constants";

// gameState
// 0 : home
// 1 : running
// 2 : game over

const initialState = {
  shipPos: startPos,
  score: 0,
  gameState: 0,
  summary: null,
};

const scope = "game";

export const types = applyScope(scope, [
  "INIT",
  "SET_SHIP_POS",
  "UPDATE_SCORE",
  "GAME_START",
  "GAME_OVER",
  "RESET_GAME",
  "SET_SUMMARY",
]);

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHIP_POS: {
      const pos = calcShipPos(state.shipPos, action.move);
      return update(state, {
        shipPos: { $set: pos },
      });
    }
    case types.UPDATE_SCORE:
      return update(state, {
        score: { $set: state.score + 1 },
      });
    case types.GAME_START:
      return update(state, {
        gameState: { $set: 1 },
      });
    case types.GAME_OVER:
      return update(state, {
        gameState: { $set: 2 },
      });
    case types.SET_SUMMARY:
      return update(state, {
        summary: { $set: action.summary },
      });
    case types.RESET_GAME:
      return update(state, {
        gameState: { $set: 0 },
        score: { $set: 0 },
        summary: { $set: null },
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
  startGame: () => ({
    type: types.GAME_START,
  }),
  endGame: () => ({
    type: types.GAME_OVER,
  }),
  setSummary: (summary) => ({
    type: types.SET_SUMMARY,
    summary,
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
export const gameStateSelector = createSelector(
  selector,
  (state) => state.gameState
);
export const summaryStateSelector = createSelector(
  selector,
  (state) => state.summary
);

export default gameReducer;
