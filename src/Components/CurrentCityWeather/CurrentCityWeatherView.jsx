import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { VscLoading } from "react-icons/vsc";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";
import { conditionsJSON, weatherMap } from "../../APIData/ConditionsData";

const CurrentCityWeatherView = ({
  place,
  image,
  temp,
  weatherText,
  temp_f,
}) => {
  const selectedUnit = useSelector(
    (state) => state.startupData.data[SELECTED_TEMP_UNIT]
  );

  // conditionsJSON.map((condition)=>{
  //   const {day,night} = condition;
  //   if(weatherMap[day] === undefined) console.log(day +" not present");
  //   if(weatherMap[night] === undefined) console.log(night +" not present");
  // })

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

  useEffect(() => {
    document.documentElement.style.setProperty('--background-image', `url(${ weatherText && weatherMap[weatherText.toLowerCase()] ?  weatherMap[weatherText.toLowerCase()].img : ""})`);
  }, [weatherText]);


  return (
    <div
      id="currentWeather"
      // style={backgroundStyle}
      className="grid rounded-lg grid-cols-3 p-4 py-1 h-full"
    >
      {place ? (
        <>
          <div className={`flex-col ${weatherMap[weatherText.toLowerCase()]?.text_color}  col-span-2 flex justify-between h-full`}>
            <div>
              <div className=" text-md sm:text-lg md:text-lg lg:text-2xl font-bold">
                {place}
              </div>
              {/* Display the weather text and current time */}
              {/* <div className="mt-1 text-xs md:text-sm text-gray-600 lg:text-lg">
                {weatherText}
              </div> */}
            </div>
            <div className="text-md sm:text-lg md:text-lg lg:text-2xl font-bold">
              {selectedUnit === "C" ? `${temp}°C` : `${temp_f}°F`}
            </div>
          </div>
          <div className={`text-right flex flex-col justify-between h-full ${weatherMap[weatherText.toLowerCase()]?.text_color}`}>
            {/* <img src={image} alt="Weather Icon" className="self-end h-[15vh]" /> */}
            <div className="text-md sm:text-lg md:text-lg lg:text-2xl font-bold">
              {weatherText}
            </div>
            <div className="text-md sm:text-lg md:text-lg lg:text-2xl font-bold">
              {currentTime}
            </div>
          </div>
        </>
      ) : (
        <div className="flex col-span-2 justify-center items-center h-full w-full">
          <VscLoading className="text-4xl animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
};

CurrentCityWeatherView.propTypes = {
  place: PropTypes.string,
  image: PropTypes.string,
  temp: PropTypes.number,
  weatherText: PropTypes.string,
  temp_f: PropTypes.number,
};

export default CurrentCityWeatherView;
