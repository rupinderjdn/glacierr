import { createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { SELECTED_TAB, SELECTED_TEMP_UNIT, WEATHER_TAB } from './storeConstants';

export const startupDataSlice = createSlice({
  name: 'startupDataSlice',
  initialState: {
    data: {
      [SELECTED_TAB] : WEATHER_TAB,
      [SELECTED_TEMP_UNIT] : "C",
    }
  },
  reducers: {
    updateStartupData: (state, action) => {
      state.data = action.payload;
    },
    appendStartupData: (state, action) => {
      const keys = Object.keys(action.payload);
      for(let i=0;i<keys.length;i++){
        state.data[keys[i]] = action.payload[keys[i]]
      }
    },
  }
})


export const { updateStartupData,appendStartupData } = startupDataSlice.actions
export default startupDataSlice.reducer;