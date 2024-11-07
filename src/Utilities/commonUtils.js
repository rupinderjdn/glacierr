import { appendCitiesData, removeCityData, updateCitiesData } from "../Store/CitiesSlice";
import { store } from "../Store/configureStore";
import { appendStartupData } from "../Store/startupDataSlice";
import { ERR_CODE } from "./applicationConstants";

export function convertTimeTo12HourFormat(time24) {
  // Split the input time string into hours and minutes
  const [hours, minutes] = time24.split(":").map(Number);

  // Calculate the 12-hour format hours
  const hours12 = hours % 12 || 12; // Converts 0 to 12 for midnight
  const amPm = hours >= 12 ? "PM" : "AM"; // Determine if it's AM or PM

  // Return the formatted time
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${amPm}`;
}


export function getShortDayName(dayIndex) {
  // Array of day names shortened to 3 characters
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  // Return the short name of the day
  return daysOfWeek[dayIndex];
}


export const setStartupData = (key, value) => {
  // Construct the payload as an object with the key-value pair
  const payload = { [key]: value };
  // Dispatch the appendStartupData action with the constructed payload
  store.dispatch(appendStartupData(payload));
};
export const getStartupData = (key) => {
  const data = store.getState().startupData.data[key];
  return data;
};

export const appendCityData = (city) => {
  store.dispatch(appendCitiesData(city));
};



// This is the utility function to remove city data
export const removeCityDataByKey = (city) => {
  store.dispatch(removeCityData(city));
};