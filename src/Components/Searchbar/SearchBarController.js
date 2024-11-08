import { fetchAsyncRequest, getCurrentUrlLat, getSearchUrl, getSearchUrlName } from "../../APIData/Apiutilities"
import { appendCityData } from "../../Utilities/commonUtils";

export const setCityDataToReduxLatLong = async (lat,long)=>{
    const response = await fetchAsyncRequest(getSearchUrl(lat,long));
    console.log(response[0]);
    appendCityData(response[0]);
}

export const searchCityFromText = async (city)=>{
    const response = await fetchAsyncRequest(getSearchUrlName(city));
    return response;
}

export const handleCityClick = (city)=>{
    appendCityData(city)
}