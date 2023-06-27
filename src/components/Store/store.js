import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer";

const store = configureStore({
  reducer: {
    taskStore: taskReducer,
  },
});
export default store;
