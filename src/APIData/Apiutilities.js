import { ERR_CODE } from "../Utilities/applicationConstants";
import { API_KEY, CURRENT_WEATHER_URL, FORECAST_URL } from "./properties";

export const fetchAsyncRequest = async (url) => {
  try {
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    console.err(e);
    return ERR_CODE;
  }
};

export const getCurrentUrlLat = (lat, long) => {
  let url =
    CURRENT_WEATHER_URL +
    "?key=" +
    API_KEY +
    "&q=" +
    lat +
    "," +
    long +
    "&aqi=no";
  return url;
};

export const getForecastUrl = (lat, long, days) => {
  let url =
    FORECAST_URL +
    "?key=" +
    API_KEY +
    "&q=" +
    lat +
    "," +
    long +
    "&days=" +
    days +
    "&aqi=no" +
    "&alerts=no";
  return url;
};
