import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentWeather } from "../WeatherDetailView/WeatherDetailsRemote";
import { ERR_CODE } from "../../Utilities/applicationConstants";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Example loading icon from react-icons
import { VscLoading } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";

const CurrentCityWeatherView = ({ place,image,temp,weatherText,temp_f }) => {

  const selectedUnit = useSelector((state)=>state.startupData.data[SELECTED_TEMP_UNIT]);
  
  return (
    <div className="grid  grid-cols-3 p-4 py-1 h-full">
      {place ? (
        <>
          <div className=" flex-col col-span-2 flex justify-between h-full">
            <div>
              <div className="text-md md:text-lg lg:text-xxl font-bold">{place}</div>
              <div className="mt-3 text-xs md:text-sm text-gray-600 lg:text-lg ">{weatherText}</div>
            </div>
            <div className="text-md md:text-lg lg:text-xxl font-bold">{selectedUnit === "C" ? temp + "°C": temp_f +"°F"}</div>
          </div>
          <div className="text-right flex flex-col justify-center h-full">
            <img src={image} alt="Weather Icon" className="self-end h-[15vh]" />
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
