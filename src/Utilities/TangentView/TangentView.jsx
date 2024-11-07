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
              className={`bg-dark-blue-700 p-4 border border-gray-600 border-l-0 border-t-0 flex items-center ${
                layout === "row"
                  ? "flex-col justify-between border-b-0 "
                  : "border-r-0 flex-row justify-between"
              }`}
            >
              <div className="text-lg font-semibold w-20 text-center">{day.date}</div>
              <img src={day.image} alt="Weather Icon" className="self-end" />
              <div className=" text-gray-500 font-semibold w-20 text-center">{day.condition}</div>
              <div className="text-xl font-bold mt-2 text-center">{day.temperature}°C</div>
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
