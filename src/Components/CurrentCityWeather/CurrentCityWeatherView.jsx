import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentWeather } from "../WeatherDetailView/WeatherDetailsRemote";
import { ERR_CODE } from "../../Utilities/applicationConstants";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Example loading icon from react-icons
import { VscLoading } from "react-icons/vsc";

const CurrentCityWeatherView = ({ place,image,temp,weatherText }) => {

  return (
    <div className="grid grid-cols-2 p-4 h-full">
      {place ? (
        <>
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="text-4xl">{place}</div>
              <div className="">{weatherText}</div>
            </div>
            <div className="text-4xl">{temp}°C</div>
          </div>
          <div className="text-right flex flex-col justify-between h-full">
            <img src={image} alt="Weather Icon" className="self-end" />
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

CurrentCityWeatherView.propTypes = {};

export default CurrentCityWeatherView;
