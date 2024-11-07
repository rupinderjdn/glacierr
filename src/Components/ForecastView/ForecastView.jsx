import React, { useEffect, useState } from "react";
import TangentView from "../../Utilities/TangentView/TangentView";
import { convertTimeTo12HourFormat } from "../../Utilities/commonUtils";
import { VscLoading } from "react-icons/vsc";

const ForecastView = ({ todayForecast }) => {
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    if (todayForecast !== undefined) {
      const data = todayForecast.hour.map((hour) => {
        const { condition, temp_c, time } = hour;
        const { text, icon } = condition;
        const timestamp = time.split(" ")[1];

        return {
          date: convertTimeTo12HourFormat(timestamp),
          condition: text,
          image: icon,
          temperature: temp_c,
        };
      });
      setForecastData(data);
    }
  }, [todayForecast]);

  return (
    <div className="p-4 h-full w-full">
      {forecastData ? (
        <TangentView data={forecastData} layout="row" />
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <VscLoading className="text-4xl animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default ForecastView;
