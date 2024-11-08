import React from "react";
import PropTypes from "prop-types";
import CityCardView from "../CityCard/CityCardView";
import { useSelector } from "react-redux";
import { VscLoading } from "react-icons/vsc";

const CitiesView = (props) => {
  const cities = useSelector((state) => state.citiesData.data);

  console.log(cities);

  return (
    <div className="h-full w-full">
      {cities && cities.length > 0 ? (
        <div className="mt-4 p-4 gap-4 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {
            cities.map((city)=>{
              return (
                <CityCardView key={city.id} city={city} />
              )
            })
          }
        </div>
      ) : (
        <div className="flex col-span-2 justify-center items-center h-full w-full">
          <VscLoading className="text-4xl animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
};

CitiesView.propTypes = {};

export default CitiesView;
