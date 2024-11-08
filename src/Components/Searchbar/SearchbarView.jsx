import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CiCloudRainbow, CiSearch } from "react-icons/ci";
import { handleCityClick, searchCityFromText } from "./SearchBarController";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { tabSelected } from "../Sidemenu/SideMenuController";
import {
  CITIES_TAB,
  SELECTED_TAB,
  SETTINGS_TAB,
  WEATHER_TAB,
} from "../../Store/storeConstants";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { handleCityCardClick } from "../CityCard/CityCardController";

const SearchbarView = (props) => {
  const [value, setValue] = useState("");
  const [searchedCities, setSearchCities] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (value) {
        try {
          const response = await searchCityFromText(value);
          setSearchCities(response); // Update the state with the search results
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      } else {
        setSearchCities([]); // Clear the results if the input is empty
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  const selectedTab = useSelector(
    (state) => state.startupData.data[SELECTED_TAB]
  );

  const handleClose = ()=>{
    setSearchCities([]);
  }
  

  return (
    <div className="flex flex-row justify-between p-1 m-2 mt-1 mb-0 shadow-3xl bg-platform-2 rounded-lg text-gray-400">
      <div className="flex flex-row items-center">
        <CiSearch className="text-gray-300 text-xl" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-4 py-1 platform-gradient-2 text-sm flex-1 focus:border-none focus:outline-none focus:border-transparent ml-4 rounded-lg bg-inherit border-none select-none"
          placeholder="Search for cities"
        />
      </div>

      {/* Conditional rendering for the search results */}
      {searchedCities.length > 0 && (
        <div className="z-20 shadow-3xl border border-gray-500 transition-all platform-gradient-3 rounded-lg shadow-lg p-2 absolute mt-12 flex flex-col">
          <div onClick={handleClose}  className=" cursor-pointer flex flex-row justify-end hover:brightness-150"><MdCancel  /></div>
            {searchedCities.map((city, index) => (
            <div
              onClick = {()=> selectedTab == CITIES_TAB ? handleCityClick(city) : handleCityCardClick(city,setSearchCities)}
              key={city.id}
              className="p-2 flex flex-row items-center justify-between border-b border-gray-500 hover:brightness-150 cursor-pointer transition-all last:border-b-0"
            >
              <div className="">
                {city.name}, {city.region}, {city.country}
              </div>
              {/* <div className="ml-7 hover:brightness-150 text-sm">
                <FaPlus /> 
              </div> */}
            </div>
          ))}
        </div>
      )}

      {/* Tabs for navigation */}
      <div className="flex flex-row  items-center">
        <div
          onClick={() => tabSelected(WEATHER_TAB)}
          className={`flex px-2 flex-col items-center hover:brightness-125 hover:text-gray-400 cursor-pointer transition-all ${
            selectedTab === WEATHER_TAB
              ? "text-gray-200 bg-platform-1 rounded-xl brightness-125"
              : "text-gray-400"
          }`}
        >
          <TiWeatherWindyCloudy className="px-1 text-2xl md:text-3xl text-center" />
        </div>
        <div
          onClick={() => tabSelected(CITIES_TAB)}
          className={`px-2 flex flex-col items-center hover:brightness-125 cursor-pointer transition-all ${
            selectedTab === CITIES_TAB
              ? "text-gray-200 bg-platform-1  rounded-xl brightness-125"
              : "text-gray-400"
          }`}
        >
          <BsMenuButtonWide className="px-1 text-xl md:text-2xl text-center" />
        </div>
        <div
          onClick={() => tabSelected(SETTINGS_TAB)}
          className={`px-2 flex flex-col items-center hover:brightness-125 hover:text-gray-400 cursor-pointer transition-all ${
            selectedTab === SETTINGS_TAB
              ? "text-gray-200 bg-platform-1 rounded-xl brightness-125"
              : "text-gray-400"
          }`}
        >
          <IoSettingsOutline className="px-1 text-2xl md:text-3xl text-center" />
        </div>
      </div>
    </div>
  );
};

SearchbarView.propTypes = {
  // Define prop types if needed
};

export default SearchbarView;
