import React from "react";
import PropTypes from "prop-types";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PiWindBold } from "react-icons/pi";
import { tabSelected } from "./SideMenuController";
import { CITIES_TAB, SELECTED_TAB, SETTINGS_TAB, WEATHER_TAB } from "../../Store/storeConstants";
import { useSelector } from "react-redux";

const SideMenuView = (props) => {

  const selectedTab = useSelector(
    (state) => state.startupData.data[SELECTED_TAB]
  );
  console.log(selectedTab)
  return (
    <div
      className="mr-8 py-8 h-full platform-gradient-3 shadow-3xl bg-platform-2 flex flex-col items-center"
    >
      <div className="flex my-4 px-1 flex-col items-center bg-platform-3 rounded-2xl text-cyan-700 cursor-pointer transition-colors md:my-6  hover:brightness-125">
        <PiWindBold className="px-1 mb-2 text-4xl  md:text-4xl text-center" />
      </div>
      <div onClick={()=>tabSelected(WEATHER_TAB)}  className={`flex my-4 px-2 flex-col items-center hover:text-gray-400 cursor-pointer transition-colors md:my-6 text-gray-500 ${selectedTab == WEATHER_TAB ? "text-gray-200 brightness-125" :""}`}>
        <TiWeatherWindyCloudy className="px-1 mb-2 text-3xl md:text-4xl text-center" />
        <div className="text-sm md:text-base font-bold ">Weather</div>
      </div>
      <div onClick={()=>tabSelected(CITIES_TAB)}   className={`my-4 px-2 flex flex-col items-center hover:text-gray-400 cursor-pointer transition-colors md:my-6 text-gray-500 ${selectedTab == CITIES_TAB ? "text-gray-200 brightness-125" :""}`}>
        <BsMenuButtonWide className="px-1 mb-2 text-2xl md:text-3xl text-center" />
        <div className="text-sm md:text-base font-bold ">Cities</div>
      </div>
      <div onClick={()=>tabSelected(SETTINGS_TAB)} className={`my-4 px-2 flex flex-col items-center hover:text-gray-400 cursor-pointer transition-colors md:my-6 text-gray-500 ${selectedTab == SETTINGS_TAB? "text-gray-200 brightness-125" :""}`}>
        <IoSettingsOutline className="px-1 mb-2 text-3xl md:text-4xl text-center" />
        <div className="text-sm md:text-base font-bold ">Settings</div>
      </div>
    </div>
  );
};

SideMenuView.propTypes = {};

export default SideMenuView;
