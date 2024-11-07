import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CurrentCityWeatherView from "../CurrentCityWeather/CurrentCityWeatherView";
import ForecastView from "../ForecastView/ForecastView";
import WeekForecastView from "../WeekForecast/WeekForecastView";
import AirConditionsView from "../AirConditions/AirConditionsView";
import { getCurrentWeather, getForeCastLatLong } from "./WeatherDetailsRemote";
import { ERR_CODE } from "../../Utilities/applicationConstants";
const WeatherDetailsView = ({ selectedCity }) => {
  const [place, setPlace] = useState();
  const [image, setImage] = useState();
  const [temp, setTemp] = useState();
  const [weatherText, setWeatherText] = useState();
  const [todayForecast,setTodayForecast] = useState(); 
  const [weekForecast,setWeekForecast] = useState(); 
  const [currentWeather,setCurrentWeather] = useState();


  useEffect(() => {
    if (selectedCity == undefined) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        getForeCastLatLong(latitude,longitude,7).then((response) => {
          console.log(response);
          if (response !== ERR_CODE) {
            const { current, location, forecast } = response;
            const { condition, temp_c } = current;
            const { text, icon } = condition;
            const { country, name, region } = location;

            setPlace(`${name}, ${region}, ${country}`);
            setImage(icon);
            setTemp(temp_c);
            setWeatherText(text);

            const {forecastday} = forecast;
            setWeekForecast(forecastday);
            const todayForecast = forecastday[0];
            setTodayForecast(todayForecast);
            setCurrentWeather(current);
          } else {
            // Handle error in fetching location
          }
        })


      });
    } else {
      // for selected city write code here
    }
  }, [selectedCity]);

  return (
    <div className="grid grid-cols-3 gap-4 text-color-1 capitalize h-full">
      <div className="flex flex-col  col-span-3 md:col-span-2">
        <div className="h-1/3 flex-1  p-2 m-2 rounded-xl ">
          <CurrentCityWeatherView
            place={place}
            image={image}
            temp={temp}
            weatherText={weatherText}
          />
        </div>
        <div className="h-1/3 flex-1 shadow-3xl p-2 platform-gradient-2 m-2 rounded-xl bg-platform-2">
          <ForecastView todayForecast={todayForecast}/>
        </div>
        <div className="h-1/3 flex-1 platform-gradient-2 shadow-3xl p-2 m-2 rounded-xl bg-platform-2">
          <AirConditionsView todayForecast={currentWeather}/>
        </div>
      </div>
      <div className="platform-gradient-3 m-2 h-full bg-platform-2 p-2 shadow-3xl rounded-xl">
        <WeekForecastView weekForecast={weekForecast}/>
      </div>
    </div>
  );
};

WeatherDetailsView.propTypes = {};

export default WeatherDetailsView;
