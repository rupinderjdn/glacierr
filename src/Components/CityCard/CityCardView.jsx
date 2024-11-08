import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCurrentWeather } from "../WeatherDetailView/WeatherDetailsRemote";
import { VscLoading } from "react-icons/vsc";
import { handleCityCardClick } from "./CityCardController";
import { useSelector } from "react-redux";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";

const CityCardView = ({ city }) => {

  const selectedUnit = useSelector((state)=>state.startupData.data[SELECTED_TEMP_UNIT]);
  

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

  return (
    <div onClick={()=>handleCityCardClick(city)} className="platform-gradient-2 hover:brightness-125 transition-all cursor-pointer rounded-xl shadow-3xl  grid grid-cols-3 p-4">
      {!mask ? (
        <>
          <div className="flex flex-col justify-center col-span-2">
            <div className="text-lg font-semibold text-white">{city.name}</div>
            <div className="text-sm text-gray-200">
              {city.region}, {city.country}
            </div>
            <div className="mt-2 text-xs text-gray-300">
              Lat: {city.lat} | Lon: {city.lon}
            </div>
            <div className="mt-2 text-lg font-bold text-gray-300">{selectedUnit === "C" ? temp + "°C": temp_f +"°F"}</div>
          </div>

          <div className="flex flex-col justify-center items-center col-span-1">
            <img src={image} alt="Weather Icon" className="self-end h-[15vh]" />
            <div className="mt-2 text-[.5rem] text-gray-400 uppercase ">
              {weatherText}
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
