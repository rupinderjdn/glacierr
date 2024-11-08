import React from "react";
import PropTypes from "prop-types";
import { FaTemperatureHigh, FaTachometerAlt } from "react-icons/fa";
import { GiWaterDrop, GiWindyStripes } from "react-icons/gi";
import { VscLoading } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";

const AirConditionsView = ({ todayForecast }) => {
  const selectedUnit = useSelector(
    (state) => state.startupData.data[SELECTED_TEMP_UNIT]
  );

  // If todayForecast is undefined, show a loading mask
  if (!todayForecast) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        <VscLoading className="text-4xl animate-spin" />
        <span className="ml-2 text-lg">Loading...</span>
      </div>
    );
  }

  // Extract relevant items from the forecast data
  const { feelslike_c, humidity, wind_kph, pressure_mb, feelslike_f } =
    todayForecast;

  return (
    <div className="flex flex-col p-1 sm:p-4 justify-start text-white rounded-lg h-full">
      <div className="flex flex-row justify-between sm:mb-6">
        <div className="md:text-md sm:text-md text-sm ml-4 font-semibold">Air Conditions</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col pl-4 justify-between gap-4">
          <div className="flex flex-row items-center">
            <FaTemperatureHigh className="lg:text-2xl md:text-xl mb-1 mr-4" />
            <div>
              <div className="text-gray-400 text-sm">Real Feel</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">
                {selectedUnit === "C"
                  ? feelslike_c + "°C"
                  : feelslike_f + "°F"}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <GiWaterDrop className="lg:text-2xl md:text-xl mb-1 mr-4" />
            <div>
              <div className="text-gray-400 text-sm">Humidity</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">
                {humidity}%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left justify-between">
          <div className="flex flex-row items-center">
            <GiWindyStripes className="lg:text-2xl md:text-xl mb-1 mr-4" />
            <div>
              <div className="text-gray-400 text-sm">Wind Speed</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">
                {wind_kph} kph
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <FaTachometerAlt className="lg:text-2xl md:text-xl mb-1 mr-4" />
            <div>
              <div className="text-gray-400 text-sm">Pressure</div>
              <div className="lg:text-md md:text-sm text-sm font-bold">
                {pressure_mb} mb
              </div>
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
