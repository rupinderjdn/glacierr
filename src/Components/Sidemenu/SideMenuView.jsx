import React from "react";
import PropTypes from "prop-types";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PiWindBold } from "react-icons/pi";

const SideMenuView = (props) => {
  return (
    <div
      className="mr-8 py-8 h-full platform-gradient-3 shadow-3xl bg-platform-2 flex flex-col items-center"
    >
      <div className="flex my-4 px-1 flex-col items-center bg-platform-3 rounded-2xl text-cyan-700 cursor-pointer transition-colors md:my-6  hover:brightness-125">
        <PiWindBold className="px-1 mb-2 text-4xl  md:text-4xl text-center" />
      </div>
      <div className="flex my-4 px-2 flex-col items-center hover:text-gray-400 cursor-pointer transition-colors md:my-6">
        <TiWeatherWindyCloudy className="px-1 mb-2 text-3xl md:text-4xl text-center" />
        <div className="text-sm md:text-base">Weather</div>
      </div>
      <div className="my-4 px-2 flex flex-col items-center hover:text-gray-400 cursor-pointer transition-colors md:my-6">
        <BsMenuButtonWide className="px-1 mb-2 text-2xl md:text-3xl text-center" />
        <div className="text-sm md:text-base">Cities</div>
      </div>
      <div className="my-4 px-2 flex flex-col items-center hover:text-gray-400 cursor-pointer transition-colors md:my-6">
        <IoSettingsOutline className="px-1 mb-2 text-3xl md:text-4xl text-center" />
        <div className="text-sm md:text-base">Settings</div>
      </div>
    </div>
  );
};

SideMenuView.propTypes = {};

export default SideMenuView;
