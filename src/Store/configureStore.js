import { configureStore } from "@reduxjs/toolkit";
import { startupDataSlice } from "./startupDataSlice";

export const store = configureStore({
  reducer: {
    startupData : startupDataSlice,
  },
});