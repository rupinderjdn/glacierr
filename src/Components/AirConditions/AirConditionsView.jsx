import React from "react";
import PropTypes from "prop-types";
import { FaTemperatureHigh, FaTachometerAlt, FaCloud } from "react-icons/fa";
import { GiWaterDrop, GiWindyStripes, GiHazardSign, GiWaves } from "react-icons/gi";
import { MdAir, MdVisibility } from "react-icons/md";
import { RiWindyFill } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";
import { CiLight } from "react-icons/ci";

const AirConditionsView = ({ todayForecast }) => {
  const selectedUnit = useSelector(
    (state) => state.startupData.data[SELECTED_TEMP_UNIT]
  );

  // If todayForecast is undefined, show a loading mask
  if (!todayForecast) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        <VscLoading className="text-3xl text-gray-500 animate-spin" />
      </div>
    );
  }

  // Extract relevant items from the forecast data
  const {
    feelslike_c,
    feelslike_f,
    humidity,
    wind_kph,
    pressure_mb,
    uv,
    air_quality,
    cloud,
    dewpoint_c,
    dewpoint_f,
    vis_km,
    gust_kph,
  } = todayForecast;

  const airQualityIndex = air_quality["us-epa-index"];

  return (
    <div className="flex flex-col p-4 sm:p-6 platform-gradient-2 rounded-lg shadow-lg text-white">
      <div className="text-lg font-semibold mb-4">Air Conditions</div>
      <div className="grid grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <FaTemperatureHigh className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Real Feel</div>
              <div className="font-bold text-lg">
                {selectedUnit === "C" ? `${feelslike_c}°C` : `${feelslike_f}°F`}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <GiWaterDrop className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Humidity</div>
              <div className="font-bold text-lg">{humidity}%</div>
            </div>
          </div>
          <div className="flex items-center">
            <FaCloud className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Cloud Cover</div>
              <div className="font-bold text-lg">{cloud}%</div>
            </div>
          </div>
          <div className="flex items-center">
            <MdVisibility className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Visibility</div>
              <div className="font-bold text-lg">{vis_km} km</div>
            </div>
          </div>
          <div className="flex items-center">
            <CiLight  className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">UV Index</div>
              <div className="font-bold text-lg">{uv}</div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <GiWindyStripes className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Wind Speed</div>
              <div className="font-bold text-lg">{wind_kph} kph</div>
            </div>
          </div>
          <div className="flex items-center">
            <FaTachometerAlt className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Pressure</div>
              <div className="font-bold text-lg">{pressure_mb} mb</div>
            </div>
          </div>
          <div className="flex items-center">
            <GiHazardSign className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Air Quality (US-EPA)</div>
              <div className="font-bold text-lg">{airQualityIndex}</div>
            </div>
          </div>
          <div className="flex items-center">
            <GiWaves className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Dew Point</div>
              <div className="font-bold text-lg">
                {selectedUnit === "C" ? `${dewpoint_c}°C` : `${dewpoint_f}°F`}
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <RiWindyFill className="text-2xl mr-3" />
            <div>
              <div className="text-gray-400 text-sm">Gust Speed</div>
              <div className="font-bold text-lg">{gust_kph} kph</div>
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
