import { ERR_CODE } from "../Utilities/applicationConstants";
import { API_KEY, CURRENT_WEATHER_URL, FORECAST_URL, SEARCH_URL } from "./properties";

export const fetchAsyncRequest = async (url) => {
  try {
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    console.err(e);
    throw new Error(e);
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
    "&aqi=yes";
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
    "&aqi=yes" +
    "&alerts=no";
  return url;
};


export const getSearchUrl = (lat,long) => {
  let url =
    SEARCH_URL +
    "?key=" +
    API_KEY +
    "&q=" +
    lat+","+long;
  return url;
};
export const getSearchUrlName = (city) => {
  let url =
    SEARCH_URL +
    "?key=" +
    API_KEY +
    "&q=" +
    city;
  return url;
};
