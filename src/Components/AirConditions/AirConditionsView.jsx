import React from "react";
import PropTypes from "prop-types";
import { FaTemperatureHigh, FaTachometerAlt } from "react-icons/fa";
import { GiWaterDrop, GiWindyStripes } from "react-icons/gi";

const AirConditionsView = ({ todayForecast }) => {
  if (!todayForecast) {
    return <div>Loading...</div>;
  }

  // Extract relevant items from the forecast data
  const { feelslike_c, humidity, wind_kph, pressure_mb } = todayForecast;

  return (
    <div className="flex flex-col p-4  justify-between text-white rounded-lg h-full">
      <div className="flex flex-row justify-between ">
        <div className="text-lg font-semibold">Air Conditions</div>
        <div className="text-sm  bg-blue-600  rounded-xl shadow-3xl hover:brightness-125 text-center items-center flex flex-col p-2 cursor-pointer">See more</div>
      </div>
      <div className="flex flex-row justify-around gap-8">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-row items-center ">
            <FaTemperatureHigh className="text-3xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400">Real Feel</div>
              <div className="text-xl font-bold">{feelslike_c}°C</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <GiWaterDrop className="text-3xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400">Humidity</div>
              <div className="text-xl font-bold">{humidity}%</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left justify-between">
          <div className="flex flex-row items-center">
            <GiWindyStripes className="text-3xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400">Wind Speed</div>
              <div className="text-xl font-bold">{wind_kph} kph</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <FaTachometerAlt className="text-3xl mb-2 mr-4" />
            <div>
              <div className=" text-gray-400">Pressure</div>
              <div className="text-xl font-bold">{pressure_mb} mb</div>
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
