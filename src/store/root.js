import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import baseReducer from "./base";
import { initSaga } from "./sagas";
import gameReducer from "./gameReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  base: baseReducer,
  game: gameReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

window.store = store;

sagaMiddleware.run(initSaga);

export default store;
