import { configureStore } from "@reduxjs/toolkit";
import startupDataReducer from "./startupDataSlice";
import citiesDataReducer from "./CitiesSlice";

export const store = configureStore({
  reducer: {
    startupData : startupDataReducer,
    citiesData : citiesDataReducer
  },
});