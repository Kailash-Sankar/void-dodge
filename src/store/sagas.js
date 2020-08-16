import { takeLatest, select, put } from "redux-saga/effects";
import {
  types as gameTypes,
  scoreSelector,
  actions as gameActions,
} from "./gameReducer";
import { scoreStore } from "@utils/scorePersistence";
import { maxRecentScoresSize } from "@utils/constants";

// initialize  and check auth
function* helloSaga() {
  yield console.log("Hello there!");
  try {
    // init
  } catch (err) {
    console.log("exception:", err);
  }
}

/*
  { top: { value: , ts }, recent: { value, ts } }
*/

function* persistScore() {
  const value = yield select(scoreSelector);
  const ts = Date.now();

  let { recent, top } = scoreStore.get() || { recent: [], top: null };
  if (recent.length === maxRecentScoresSize) {
    recent.pop();
  }
  recent.unshift({ value, ts });

  if (!top || top.value < value) {
    top = { value, ts };
  }

  scoreStore.set({ recent, top });
  yield put(gameActions.setSummary({ recent, top }));
}

export function* initSaga() {
  // load test
  yield helloSaga();

  yield takeLatest(gameTypes.GAME_OVER, persistScore);
}
