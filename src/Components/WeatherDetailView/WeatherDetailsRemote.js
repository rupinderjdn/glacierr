import {
  fetchAsyncRequest,
  getCurrentUrlLat,
  getForecastUrl,
} from "../../APIData/Apiutilities";
import { ERR_CODE } from "../../Utilities/applicationConstants";

export const getCurrentWeather = async (latitude, longitude) => {
  const response = await fetchAsyncRequest(
    getCurrentUrlLat(latitude, longitude)
  );
  return response;
};

export const getForeCastLatLong = async (lat, long, days) => {
  const response = await fetchAsyncRequest(getForecastUrl(lat, long, days));
  return response;
};
