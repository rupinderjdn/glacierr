import React from "react";
import PropTypes from "prop-types";
import SideMenuView from "../Sidemenu/SideMenuView";
import SearchbarView from "../Searchbar/SearchbarView";
import WeatherDetailsView from "../WeatherDetailView/WeatherDetailsView";

const DashboardView = (props) => {
  return (
    <div className="h-full  w-full">
      <div className="w-full h-full ">
        <WeatherDetailsView />
      </div>
    </div>
  );
};

DashboardView.propTypes = {};

export default DashboardView;
