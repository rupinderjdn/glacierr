import {  API_KEY, CURRENT_WEATHER_URL } from "./properties"

export const getCurrentUrlLat = (lat,long)=>{
    let url = CURRENT_WEATHER_URL+"?key="+API_KEY+"&q="+lat+","+long+"&aqi=no";
    console.log(url);
    return url;
}