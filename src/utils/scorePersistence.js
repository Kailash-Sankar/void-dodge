import storeWrap from "store-wrap";

const scoreStore = storeWrap.generateHandle(
  "localStorage",
  "void-dodge-scores"
);

export { scoreStore };
