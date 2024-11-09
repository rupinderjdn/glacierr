import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentWeather } from "../WeatherDetailView/WeatherDetailsRemote";
import { VscLoading } from "react-icons/vsc";
import { handleCityCardClick } from "./CityCardController";
import { useSelector } from "react-redux";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";
import { weatherMap } from "../../APIData/ConditionsData";

const CityCardView = ({ city }) => {

  const selectedUnit = useSelector((state)=>state.startupData.data[SELECTED_TEMP_UNIT]);
  
  const [currentTime, setCurrentTime] = useState("");

  // Function to get the current time in 12-hour format
  const formatTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert '0' to '12'
    minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero to minutes if needed

    return `${hours}:${minutes} ${ampm}`;
  };

  // Update the current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 60000); // Update every 60 second

    // Set the initial time
    setCurrentTime(formatTime());

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  const [image, setImage] = useState();
  const [temp, setTemp] = useState();
  const [temp_f, setTemp_f] = useState();
  const [weatherText, setWeatherText] = useState();
  const [mask, setMask] = useState(true);
  useEffect(() => {
    getCurrentWeather(city.lat, city.lon).then((response) => {
      const { current, location } = response;
      const { condition, temp_c, temp_f } = current;
      const { text, icon } = condition;
      // const { country, name, region } = location;
      // setPlace(`${name}, ${region}, ${country}`);
      setImage(icon);
      setTemp(temp_c);
      setTemp_f(temp_f);
      setWeatherText(text);
      setMask(false);
    })
    .catch((e)=>{
      // console.log(e);
    })
  }, [city]);


  console.log(weatherText)
  const backgroundStyle = {
    background: `url(${ weatherText && weatherMap[weatherText.toLowerCase()] ?  weatherMap[weatherText.toLowerCase()].img : ""}) no-repeat center center`,
    backgroundSize: 'cover',
  };

  return (
    <div id={city.id} style={backgroundStyle} onClick={()=>handleCityCardClick(city)} className="platform-gradient-2 hover:brightness-125 transition-all cursor-pointer rounded-xl shadow-3xl  grid grid-cols-3 p-4">
      {!mask ? (
        <>
          <div className={`flex flex-col justify-center col-span-2 ${weatherMap[weatherText.toLowerCase()]?.text_color}`}>
            <div className="text-lg font-semibold ">{city.name}</div>
            <div className="text-sm font-semibold">
              {city.region}, {city.country}
            </div>
            <div className="mt-2 text-xs font-semibold ">
              Lat: {city.lat} | Lon: {city.lon}
            </div>
            <div className="mt-2 text-lg font-bold ">{selectedUnit === "C" ? temp + "°C": temp_f +"°F"}</div>
          </div>

          <div className={`text-right flex flex-col justify-between h-full ${weatherMap[weatherText.toLowerCase()]?.text_color}`}>
            {/* <img src={image} alt="Weather Icon" className="self-end h-[15vh]" /> */}
            <div className="text-md sm:text-lg md:text-md lg:text-md font-bold">
              {weatherText}
            </div>
            <div className="text-md sm:text-lg md:text-md lg:text-md font-bold">
              {currentTime}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center col-span-3  w-full">
          <VscLoading className="text-4xl animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
};

CityCardView.propTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityCardView;
