import React, { useEffect, useState } from "react";
import TangentView from "../../Utilities/TangentView/TangentView";
import { getShortDayName } from "../../Utilities/commonUtils";
import { VscLoading } from "react-icons/vsc";

const WeekForecastView = ({ weekForecast }) => {
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    if (weekForecast !== undefined) {
      const data = weekForecast.map((singleDay) => {
        const { date, day } = singleDay;
        const dayName = new Date(date).getDay();
        const { condition, avgtemp_c,avgtemp_f } = day;
        const { text, icon } = condition;

        return {
          date: getShortDayName(dayName),
          image: icon,
          condition: text,
          temp_f: avgtemp_f,
          temperature: avgtemp_c,
        };
      });

      setForecastData(data);
    }
  }, [weekForecast]);

  return (
    <div className="p-2 rounded-xl overflow-y-auto  flex flex-col ">
      <h2 className=" uppercase text-xs">14-day Forecast</h2>
      {forecastData ? (
        <TangentView data={forecastData} layout="column" />
      ) : (
        <div className="flex justify-center items-center  w-full">
          <VscLoading className="text-4xl animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default WeekForecastView;
