import { SELECTED_CITY, SELECTED_TAB, WEATHER_TAB } from "../../Store/storeConstants";
import { setStartupData } from "../../Utilities/commonUtils"

export const handleCityCardClick = (city,setSearchCities)=>{
    setStartupData(SELECTED_CITY,city);
    setStartupData(SELECTED_TAB,WEATHER_TAB);
    setSearchCities([])
}