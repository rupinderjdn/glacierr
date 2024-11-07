import React from "react";
import TangentView from "../../Utilities/TangentView/TangentView";

const WeekForecastView = () => {
  // Default seven-day forecast data
  const defaultData = [
    { date: "Mon", condition: "Sunny", temperature: 25 },
    { date: "Tue", condition: "Cloudy", temperature: 22 },
    { date: "Wed", condition: "Rainy", temperature: 19 },
    { date: "Thu", condition: "Windy", temperature: 21 },
    { date: "Fri", condition: "Snowy", temperature: -1 },
    { date: "Sat", condition: "Stormy", temperature: 18 },
    { date: "Sun", condition: "Foggy", temperature: 17 },
  ];

  return (
    <div className="p-4">
      <h2>7-day forecast</h2>
      <TangentView data={defaultData} layout="column" />
    </div>
  );
};

export default WeekForecastView;
