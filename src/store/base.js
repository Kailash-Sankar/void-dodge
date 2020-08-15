import update from "immutability-helper";
import { applyScope } from "./utils";

const initialState = {
  msg: "hello world",
};

const scope = "base";

export const types = applyScope(scope, ["SET_MSG"]);

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MSG:
      return update(state, {
        msg: { $set: action.msg },
      });
  }
  return state;
};

// dispatch actions
export const actions = () => ({
  setMsg: (msg) => ({
    type: types.SET_MSG,
    msg,
  }),
});

export const baseSelector = (state) => state.base;

export default commonReducer;
