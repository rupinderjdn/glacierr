import PropTypes from "prop-types";

const TangentView = ({ data, layout }) => {
  return (
    <div className="bg-dark-blue-900 text-white h-full rounded-lg">
      <div
        className={`flex ${
          layout === "row"
            ? "items-center flex-row space-x-4 overflow-x-auto"
            : "flex-col space-y-4  overflow-y-scroll  h-[95%]" // Add h-80 or any height to enable vertical scrolling
        }`}
      >
        {data &&
          data.map((day, index) => (
            <div
              key={index}
              className={`bg-dark-blue-700  border border-gray-600 border-l-0 border-t-0 flex items-center ${
                layout === "row"
                  ? "flex-col justify-between my-2 mb-0 border-b-0 max-h-[full] "
                  : "border-r-0 flex-row mx-2 justify-between max-w-[full]"
              }`}
            >
              <div className="text-sm md:text-md font-semibold w-[7vw] text-center">{day.date}</div>
              <img src={day.image} alt="Weather Icon" className="self-end" />
              <div className=" text-gray-500 text-xs font-semibold  text-center">{day.condition}</div>
              <div className="text-sm md:text-md font-bold  text-center">{day.temperature}°C</div>
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
