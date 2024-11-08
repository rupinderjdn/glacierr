import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { SELECTED_TEMP_UNIT } from "../../Store/storeConstants";

const TangentView = ({ data, layout }) => {

  const selectedUnit = useSelector((state)=>state.startupData.data[SELECTED_TEMP_UNIT]);

  return (
    <div className="bg-dark-blue-900 text-white  rounded-lg">
      <div
        className={`flex ${
          layout === "row"
            ? "items-center mb-1 flex-row space-x-1 h-full overflow-x-auto"
            : "flex-col  " // Add h-80 or any height to enable vertical scrolling
        }`}
      >
        {data &&
          data.map((day, index) => (
            <div
              key={index}
              className={`  border border-gray-600 border-l-0 border-t-0 flex items-center ${
                layout === "row"
                  ? "flex-col pb-1 px-2 sm:px-3 justify-between items-center my-1  border-b-0  "
                  : "border-r-0 flex-row mx-2 justify-between "
              }`}
            >
              <div className="text-[.6rem] sm:text-md md:text-[.9rem] font-semibold w-[7vw] text-center">{day.date}</div>
              <img src={day.image} alt="Weather Icon" className={`self-end  `} />
              <div className=" text-gray-500 text-xs sm:text-md font-semibold  text-center">{day.condition}</div>
              <div className="text-[.6rem] sm:text-md md:text-[.9rem] font-bold  text-center">{selectedUnit === "C" ? day.temperature + "°C":day.temp_f +"°F"}</div>
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
