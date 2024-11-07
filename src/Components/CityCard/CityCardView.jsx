import React from 'react';
import PropTypes from 'prop-types';

const CityCardView = ({ city }) => {
  return (
    <div className="platform-gradient-2 rounded-xl shadow-3xl h-40 w-90 flex flex-col p-4">
      <div className="text-lg font-semibold text-white">{city.name}</div>
      <div className="text-sm text-gray-200">{city.region}, {city.country}</div>
      <div className="mt-2 text-xs text-gray-300">Lat: {city.lat} | Lon: {city.lon}</div>
    </div>
  );
};

CityCardView.propTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityCardView;
