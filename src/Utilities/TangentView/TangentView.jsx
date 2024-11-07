import React from "react";
import PropTypes from "prop-types";

const TangentView = ({ data, layout }) => {
  return (
    <div className="bg-dark-blue-900 text-white p-6 rounded-lg shadow-lg">
      <div
        className={`flex ${layout === "row" ? "flex-row justify-between space-x-4" : "flex-col space-y-4"}`}
      >
        {data.map((day, index) => (
          <div
            key={index}
            className={`bg-dark-blue-700 p-4 rounded-md shadow-md flex items-center ${layout == "row" ?"flex-col" :"flex-row justify-between"}`}
          >
            <div className="text-lg font-semibold">{day.date}</div>
            <div className="text-sm">{day.condition}</div>
            <div className="text-xl font-bold mt-2">{day.temperature}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};

TangentView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
  layout: PropTypes.oneOf(["row", "column"]),
};

export default TangentView;
