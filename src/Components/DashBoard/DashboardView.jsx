import React from "react";
import PropTypes from "prop-types";
import SideMenuView from "../Sidemenu/SideMenuView";
import SearchbarView from "../Searchbar/SearchbarView";
import WeatherDetailsView from "../WeatherDetailView/WeatherDetailsView";

const DashboardView = (props) => {
  return (
    <div className="h-full platform-gradient-1 w-full">
      <div className="w-full h-full mb-4">
        <WeatherDetailsView />
      </div>
    </div>
  );
};

DashboardView.propTypes = {};

export default DashboardView;
