import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CiCloudRainbow, CiSearch } from "react-icons/ci";
import { searchCityFromText } from "./SearchBarController";
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

const SearchbarView = (props) => {
  const [value, setValue] = useState("");

  const selectedTab = useSelector(
    (state) => state.startupData.data[SELECTED_TAB]
  );

  return (
    <div className="flex flex-row items-center p-1 m-2 mt-1 mb-0 shadow-3xl bg-platform-2 rounded-lg text-gray-400">
      <CiSearch className="text-gray-300 text-xl" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update the value on input change
        className="px-4 py-1 platform-gradient-2 text-sm flex-1 focus:border-none focus:outline-none focus:border-transparent ml-4 rounded-lg bg-inherit border-none select-none"
        placeholder="Search for cities"
      />
      <div
        onClick={() => tabSelected(WEATHER_TAB)}
        className={`flex  px-2 flex-col items-center hover:brightness-125 hover:text-gray-400 cursor-pointer transition-colors  ${
          selectedTab == WEATHER_TAB
            ? "text-gray-200 brightness-125"
            : "text-gray-400"
        }`}
      >
        <TiWeatherWindyCloudy className="px-1  text-2xl md:text-3xl text-center" />
        {/* <div className="text-sm md:text-base font-bold ">Weather</div> */}
      </div>
      <div
        onClick={() => tabSelected(CITIES_TAB)}
        className={` px-2 flex flex-col items-center hover:brightness-125 cursor-pointer transition-colors  ${
          selectedTab == CITIES_TAB
            ? "text-gray-200 brightness-125"
            : "text-gray-400"
        }`}
      >
        <BsMenuButtonWide className="px-1  text-xl md:text-2xl text-center" />
        {/* <div className="text-sm md:text-base font-bold ">Cities</div> */}
      </div>
      <div
        onClick={() => tabSelected(SETTINGS_TAB)}
        className={` px-2 flex flex-col items-center hover:brightness-125 hover:text-gray-400 cursor-pointer transition-colors  ${
          selectedTab == SETTINGS_TAB
            ? "text-gray-200 brightness-125"
            : "text-gray-400"
        }`}
      >
        <IoSettingsOutline className="px-1  text-2xl md:text-3xl text-center" />
        {/* <div className="text-sm md:text-base font-bold ">Settings</div> */}
      </div>
    </div>
  );
};

SearchbarView.propTypes = {
  // searchCityFromText: PropTypes.func.isRequired, // Define prop type for the function
};

export default SearchbarView;
