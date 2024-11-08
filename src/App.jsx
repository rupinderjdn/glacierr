import { useEffect, useState } from "react";
import "./App.css";
import DashboardView from "./Components/DashBoard/DashboardView";
import {
  CITIES_TAB,
  SELECTED_TAB,
  SETTINGS_TAB,
  WEATHER_TAB,
} from "./Store/storeConstants";
import { useSelector } from "react-redux";
import CitiesView from "./Components/CitiesView/CitiesView";
import SideMenuView from "./Components/Sidemenu/SideMenuView";
import SearchbarView from "./Components/Searchbar/SearchbarView";
import WeatherDetailsView from "./Components/WeatherDetailView/WeatherDetailsView";
import SettingsView from "./Components/SettingsView/SettingsView";
function App() {
  const selectedTab = useSelector(
    (state) => state.startupData.data[SELECTED_TAB]
  );
  return (
    <>
      <div className=" min-h-[full] platform-gradient-1 w-full">
        <div className="flex flex-row items-center h-full ">
          {/* <div className=" w-1/12 md:w-1/12 h-full ">
            <SideMenuView />
          </div> */}
          <div className=" w-full flex flex-col h-full justify-start">
            <div className="w-full ">
              <SearchbarView />
            </div>
            {selectedTab == WEATHER_TAB && <DashboardView />}
            {selectedTab == CITIES_TAB && <CitiesView />}
            {selectedTab == SETTINGS_TAB && <SettingsView />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
