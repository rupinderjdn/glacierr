import { getCurrentUrlLat } from "../../APIData/Apiutilities";
import { ERR_CODE } from "../../Utilities/applicationConstants";

export const getCurrentWeather = async (latitude,longitude)=>{
    try{

        const response = await fetch(getCurrentUrlLat(latitude,longitude));
        const json = await  response.json()
        return json;
    }
    catch(e){
        console.error(e);
        return ERR_CODE;
    }
}