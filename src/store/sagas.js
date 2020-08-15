import { call, put, takeLatest } from "redux-saga/effects";
import { types as projectTypes } from "./gameReducer";
import Api from "@api";
import { parseProjects } from "@utils/project";

// initialize  and check auth
function* helloSaga() {
  yield console.log("Hello there!");
  try {
    // init
  } catch (err) {
    console.log("exception:", err);
  }
}

function* getProjects() {
  try {
    const res = yield call(Api.getRepoList);
    yield put({ type: projectTypes.SET_SUCCESS, data: parseProjects(res) });
  } catch (err) {
    yield put({ type: projectTypes.SET_ERROR });
  }
}

export function* initSaga() {
  // load test
  yield helloSaga();

  yield takeLatest(projectTypes.INIT, getProjects);
}
