import { createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'

export const startupDataSlice = createSlice({
  name: 'startupDataSlice',
  initialState: {
    data: {}
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



export const selectStartupData = (state) => state.startupData.data;
export const selectStartupDataByKey = (key) => createSelector(selectStartupData, (data) => data.find(item => item.key === key));

// export const selectStartupDataValueByKey = (state, key) => state.startupDataSlice.data[key];

export const { updateStartupData,appendStartupData } = startupDataSlice.actions
export default startupDataSlice.reducer