import React from "react";
import PropTypes from "prop-types";

const AirConditionsView = (props) => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row justify-between">
        <div>Air Conditions</div>
        <div>See more</div>
      </div>
      <div className="grid grid-cols-2">
        <div>
            <div>Real Feel</div>
            <div>30</div>
        </div>
        <div>
        <div>Real Feel</div>
        <div>30</div>
        </div>
      </div>
    </div>
  );
};

AirConditionsView.propTypes = {};

export default AirConditionsView;
