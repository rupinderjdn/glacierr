import React, { useState } from "react";
import PropTypes from "prop-types";
import ToggleButton from "react-toggle-button";

const SettingsView = (props) => {
  const [temperatureUnit, setTemperatureUnit] = useState("C");

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) =>
      prevUnit === "C" ? "F" : "C"
    );
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
                base: 'rgb(250,250,250)',
              },
              inactiveThumb: {
                base: 'rgb(62,130,247)',
              },
              active: {
                base: 'rgb(207,221,245)',
                hover: 'rgb(177, 191, 215)',
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
              backgroundColor: "white",
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
