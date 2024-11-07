import { createSlice } from '@reduxjs/toolkit';

export const citiesDataSlice = createSlice({
  name: 'citiesDataSlice',
  initialState: {
    data: [], // Holds an array of cities data
  },
  reducers: {
    // To replace the entire cities data with the provided payload
    // updateCitiesData: (state, action) => {
    //   state.data = action.payload;
    // },

    // To append new cities data to the existing data array
    appendCitiesData: (state, action) => {
      const newCityData = action.payload;
      // Ensure you're appending only unique cities based on their name or any other unique key
      if (!state.data.some(city => city.id === newCityData.id)) {
        state.data.push(newCityData);
      }
    },

    // To remove a city from the array based on its name or another unique identifier
    removeCityData: (state, action) => {
      state.data = state.data.filter(city => city.id !== action.payload.id);
    },
  },
});

// Export the action creators for use in components
export const { updateCitiesData, appendCitiesData, removeCityData } = citiesDataSlice.actions;

// Export the reducer to be included in the store
export default citiesDataSlice.reducer;
