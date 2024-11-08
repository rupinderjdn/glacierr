import React from "react";
import PropTypes from "prop-types";
import { FaTemperatureHigh, FaTachometerAlt } from "react-icons/fa";
import { GiWaterDrop, GiWindyStripes } from "react-icons/gi";
import { VscLoading } from "react-icons/vsc";

const AirConditionsView = ({ todayForecast }) => {
  if (!todayForecast) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <VscLoading className="text-4xl animate-spin text-gray-500" />
      </div>
    );
  }

  // Extract relevant items from the forecast data
  const { feelslike_c, humidity, wind_kph, pressure_mb } = todayForecast;

  return (
    <div className="flex flex-col p-1  justify-between text-white rounded-lg h-full">
      <div className="flex flex-row justify-between ">
        <div className="md:text-md text-sm font-semibold">Air Conditions</div>
        <div className="text-xs m-2 bg-blue-600  rounded-xl shadow-3xl hover:brightness-125 text-center items-center flex flex-col p-1 cursor-pointer">
          See more
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col pl-4 justify-between gap-4">
          <div className="flex flex-row items-center ">
            <FaTemperatureHigh className="lg:text-2xl md:text-xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400 text-sm">Real Feel</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">{feelslike_c}°C</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <GiWaterDrop className="lg:text-2xl md:text-xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400 text-sm">Humidity</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">{humidity}%</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left justify-between">
          <div className="flex flex-row items-center">
            <GiWindyStripes className="lg:text-2xl md:text-xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400 text-sm">Wind Speed</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">{wind_kph} kph</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <FaTachometerAlt className="lg:text-2xl md:text-xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400 text-sm">Pressure</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">{pressure_mb} mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AirConditionsView.propTypes = {
  todayForecast: PropTypes.object,
};

export default AirConditionsView;
