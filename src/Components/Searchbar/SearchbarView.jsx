import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import { searchCityFromText } from './SearchBarController';

const SearchbarView = (props) => {
  const [value, setValue] = useState('');

  

  return (
    <div className="flex flex-row items-center p-2 m-2 shadow-3xl bg-platform-2 rounded-lg text-gray-400">
      <CiSearch className="text-gray-300 text-2xl" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update the value on input change
        className="px-4 platform-gradient-2 flex-1 focus:border-none focus:outline-none focus:border-transparent ml-4 rounded-lg bg-inherit border-none select-none"
        placeholder="Search for cities"
      />
    </div>
  );
};

SearchbarView.propTypes = {
  searchCityFromText: PropTypes.func.isRequired, // Define prop type for the function
};

export default SearchbarView;
