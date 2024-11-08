import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CurrentCityWeatherView from "../CurrentCityWeather/CurrentCityWeatherView";
import ForecastView from "../ForecastView/ForecastView";
import WeekForecastView from "../WeekForecast/WeekForecastView";
import AirConditionsView from "../AirConditions/AirConditionsView";
import { getCurrentWeather, getForeCastLatLong } from "./WeatherDetailsRemote";
import { ERR_CODE } from "../../Utilities/applicationConstants";
import { setCityDataToReduxLatLong } from "../Searchbar/SearchBarController";
import { useSelector } from "react-redux";
import { SELECTED_CITY } from "../../Store/storeConstants";
const WeatherDetailsView = () => {

  const selectedCity = useSelector((state)=> state.startupData.data[SELECTED_CITY]);
  console.log(selectedCity)

  const [place, setPlace] = useState();
  const [image, setImage] = useState();
  const [temp, setTemp] = useState();
  const [temp_f, setTemp_F] = useState();
  const [weatherText, setWeatherText] = useState();
  const [todayForecast,setTodayForecast] = useState(); 
  const [weekForecast,setWeekForecast] = useState(); 
  const [currentWeather,setCurrentWeather] = useState();


  useEffect(() => {

    const handleCityUpdate = (latitude,longitude)=>{
      setCityDataToReduxLatLong(latitude,longitude);

      getForeCastLatLong(latitude,longitude,14).then((response) => {
        console.log(response);
        if (response !== ERR_CODE) {
          
          const { current, location, forecast } = response;
          const { condition, temp_c,temp_f } = current;
          const { text, icon } = condition;
          const { country, name, region } = location;
          setPlace(`${name}, ${region}, ${country}`);
          setImage(icon);
          setTemp(temp_c);
          setTemp_F(temp_f);
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
    }

    if (selectedCity == undefined) {

      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        handleCityUpdate(latitude,longitude)
      });


    } else {
      handleCityUpdate(selectedCity.lat,selectedCity.lon);
    }
  }, [selectedCity]);

  return (
    <div className="grid grid-cols-3 gap-4 text-color-1 capitalize h-full">
      <div className="flex flex-col h-[90%] col-span-3 md:col-span-2">
        <div className="flex-1 shadow-3xl   m-2  rounded-xl ">
          <CurrentCityWeatherView
            place={place}
            image={image}
            temp={temp}
            temp_f={temp_f}
            weatherText={weatherText}
          />
        </div>
        <div className=" flex-1 shadow-3xl  platform-gradient-2 m-2 rounded-xl bg-platform-2">
          <ForecastView todayForecast={todayForecast}/>
        </div>
        <div className="  platform-gradient-2 shadow-3xl  m-2 rounded-xl bg-platform-2">
          <AirConditionsView todayForecast={currentWeather}/>
        </div>
      </div>
      <div className="col-span-3 md:col-span-1 platform-gradient-3 m-2 mb-0  overflow-y-auto bg-platform-2  shadow-3xl rounded-xl">
        <WeekForecastView weekForecast={weekForecast}/>
      </div>
    </div>
  );
};

WeatherDetailsView.propTypes = {};

export default WeatherDetailsView;
