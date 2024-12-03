// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../src/features/TaskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
