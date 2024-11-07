import { configureStore } from "@reduxjs/toolkit";
import startupDataReducer from "./startupDataSlice";

export const store = configureStore({
  reducer: {
    startupData : startupDataReducer,
  },
});