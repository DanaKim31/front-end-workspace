import { configureStore } from "@reduxjs/toolkit"; // toolkit 방식
//import { combineReducers } from "redux"; // 리덕스 방식
import counter from "./counter";

/* 리덕스 방식
const store = combineReducers({
counter,
});

export default store;
*/

/* ============== toolkit 방식 ============== */
const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
});

export default store;
