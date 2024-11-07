import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CurrentCityWeatherView from "../CurrentCityWeather/CurrentCityWeatherView";
import ForecastView from "../ForecastView/ForecastView";
import WeekForecastView from "../WeekForecast/WeekForecastView";
import AirConditionsView from "../AirConditions/AirConditionsView";
import { getCurrentWeather } from "./WeatherDetailsRemote"
import { ERR_CODE } from "../../Utilities/applicationConstants";
const WeatherDetailsView = (props) => {

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude,longitude} = position.coords;
      getCurrentWeather(latitude,longitude).then((response)=>{
        if(response != ERR_CODE){
          const {current,location} = response;
          console.log(current,location);
        }
        else{
          // error in fetching location
        }

      })
    })
  },[])

  return (
    <div className="grid grid-cols-3 gap-4 text-color-1 capitalize h-full">
      <div className="flex flex-col  col-span-3 md:col-span-2">
        <div className="h-1/3 flex-1  p-2 m-2 rounded-xl "><CurrentCityWeatherView /></div>
        <div className="h-1/3 flex-1  p-2 m-2 rounded-xl bg-platform-2">
          <ForecastView />
        </div>
        <div className="h-1/3 flex-1  p-2 m-2 rounded-xl bg-platform-2">
          <AirConditionsView />
        </div>
      </div>
      <div className=" m-2  bg-platform-2 p-2 rounded-xl">
        <WeekForecastView />
      </div>
    </div>
  );
};

WeatherDetailsView.propTypes = {

};

export default WeatherDetailsView;
