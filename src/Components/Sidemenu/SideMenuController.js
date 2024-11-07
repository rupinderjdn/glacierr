import { SELECTED_TAB } from "../../Store/storeConstants"
import { setStartupData } from "../../Utilities/commonUtils"

export const tabSelected = (tab)=>{
    setStartupData(SELECTED_TAB,tab)
}