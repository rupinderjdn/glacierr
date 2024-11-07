import React from "react";
import PropTypes from "prop-types";

const WeatherDetailsView = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 text-color-1 capitalize h-full">
      <div className="flex flex-col  col-span-3 md:col-span-2">
        <div className="h-1/3 flex-1  p-2 m-2 rounded-md ">main</div>
        <div className="h-1/3 flex-1  p-2 m-2 rounded-md bg-platform-2">
          Today's forecast
        </div>
        <div className="h-1/3 flex-1  p-2 m-2 rounded-md bg-platform-2">
          Air Conditions
        </div>
      </div>
      <div className=" m-2  bg-platform-2 p-2 rounded-md">
        Week's forecast
      </div>
    </div>
  );
};

WeatherDetailsView.propTypes = {};

export default WeatherDetailsView;
