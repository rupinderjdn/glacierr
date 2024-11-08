import React, { useState } from "react";
import PropTypes from "prop-types";
import ToggleButton from "react-toggle-button";
import { setStartupData } from "../../Utilities/commonUtils";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";
import { useSelector } from "react-redux";

const SettingsView = (props) => {
  const temperatureUnit = useSelector((state)=>state.startupData.data[SELECTED_TEMP_UNIT]);

  const toggleTemperatureUnit = () => {
    const newUnit =  temperatureUnit === "C" ? "F" : "C"
    setStartupData(SELECTED_TEMP_UNIT,newUnit)
  };

  return (
    <div className="p-6 m-4 flex flex-col justify-center items-center rounded-lg bg-gradient-to-br platform-gradient-3 shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <div className="flex items-center justify-between w-full max-w-sm">
        <span className="text-gray-300">Temperature Unit:</span>
        <div className="ml-4 flex items-center">
          <ToggleButton
            colors={{
              activeThumb: {
                base: 'rgb(62,130,247)',
              },
              inactiveThumb: {
                base: 'rgb(62,130,247)',
              },
              active: {
                base: 'rgb(65,66,68)',
                hover: 'rgb(95,96,98)',
              },
              inactive: {
                base: 'rgb(65,66,68)',
                hover: 'rgb(95,96,98)',
              }
            }}
            inactiveLabel={"C"}
            activeLabel={"F"}
            value={temperatureUnit === "F"}
            onToggle={toggleTemperatureUnit}
            thumbStyle={{
              borderRadius: 20,
              backgroundColor: "#3b82f6",
              boxShadow: "0 0 2px rgba(0,0,0,0.3)",
            }}
            trackStyle={{
              borderRadius: 10,
              backgroundColor: "#3b82f6",
              width: 300,
              height: 24,
            }}
            // thumbAnimateRange={[2, 38]}
          />
          {/* <span className="ml-3 text-sm">{temperatureUnit}</span> */}
        </div>
      </div>
    </div>
  );
};

SettingsView.propTypes = {
  // Define prop types if you expect any props to be passed
};

export default SettingsView;
