import { store } from "../Store/configureStore";
import { appendStartupData } from "../Store/startupDataSlice";
import { ERR_CODE } from "./applicationConstants";

export function convertTimeTo12HourFormat(time24) {
  // Split the input time string into hours and minutes
  const [hours, minutes] = time24.split(":").map(Number);

  // Calculate the 12-hour format hours
  const hours12 = hours % 12 || 12; // Converts 0 to 12 for midnight
  const amPm = hours >= 12 ? "PM" : "AM"; // Determine if it's AM or PM

  // Return the formatted time
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${amPm}`;
}


export function getShortDayName(dayIndex) {
  // Array of day names shortened to 3 characters
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  // Return the short name of the day
  return daysOfWeek[dayIndex];
}



export const getUIData = (key) => {
  const data = store.getState().UILayoutData.UIData[key];
  return data;
};
export const duplicateLabelValues = (array, duplicateLabel = true) => {
  return array.map((item) => {
    if (duplicateLabel) return { label: item.label, value: item.label };
    else return { label: item.value, value: item.value };
  });
};
export const displayAllUIData = () => {
  let data = store.getState().UILayoutData.UIData;
  for (let ele in data) {
    console.log(ele + " => ", data[ele]);
  }
  console.log("Screen Childrens");
  data = store.getState().UILayoutData.ScreenChildrenWidgets;
  for (let ele in data) {
    console.log(ele + " => ", data[ele]);
  }
  console.log("Screen Childrens Properties");
  data = store.getState().UILayoutData.ScreenChildrenWidgetsProperties;
  for (let ele in data) {
    console.log(ele + " => ", data[ele]);
  }
};

export const displayAllStartupData = () => {
  let data = store.getState().startupData.data;
  for (let ele in data) {
    console.log(ele + " => ", data[ele]);
  }
};

export const displayMarketWatchData = () => {
  let data = store.getState().marketWatchData.rowsDataMap;
  for (let ele in data) {
    console.log(ele + " => ", data[ele]);
  }
  data = store.getState().marketWatchData.subscriptionMap;
  for (let ele in data) {
    console.log(ele + " => ", data[ele]);
  }
};

export const getChildrenWidgets = (screenId) => {
  const data = store.getState().UILayoutData.ScreenChildrenWidgets[screenId];
  return data;
};
export const getAllChildrenWidgets = () => {
  const data = store.getState().UILayoutData.ScreenChildrenWidgets;
  return data;
};

export const getValueLabels = (list) => {
  const valueLabels = [];
  list?.forEach((item) => {
    let valuelabel = { label: item, value: item };
    valueLabels.push(valuelabel);
  });
  return valueLabels;
};
export const getLabels = (list) => {
  const labels = list?.map((item) => {
    const { label } = item;
    return label;
  });
  return labels;
};

export const getAllActiveOrders = () => {
  const data = store.getState().activeOrders.data;
  return data;
};
export const getAllHoldOrders = () => {
  const data = store.getState().holdOrders.data;
  return data;
};
export const setStartupData = (key, value) => {
  // Construct the payload as an object with the key-value pair
  const payload = { [key]: value };
  // Dispatch the appendStartupData action with the constructed payload
  store.dispatch(appendStartupData(payload));
};
export const getStartupData = (key) => {
  const data = store.getState().startupData.data[key];
  return data;
};

export const toDecimal = (value, precision) => {
  if (precision == undefined) {
    return Number(value).toFixed(2);
  }
  return Number(value).toFixed(precision);
};

/**
 * Promisifies a function with a callback-based API.
 * @param {Function} asyncFunction - The function to be promisified.
 * @param {Array} args - Arguments to be passed to the function.
 * @returns {Promise} - A promise that resolves with the result of the async function or rejects with an error.
 */
export const promisifyCall = (asyncFunction, ...args) => {
  return new Promise((resolve, reject) => {
    asyncFunction(...args, (result) => {
      try {
        resolve(result);
      } catch (err) {
        reject(result);
      }
    });
  });
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const getNestedValue = (obj, path) => {
  const keys = path.split(".");
  return keys.reduce((acc, key) => acc && acc[key], obj);
};

export const getComponentHeightAfterResizing = (...args) => {
  let parentHeight = args[0];
  let offset = args[1];

  for (let i = 2; i < args.length; i++) {
    let ele = document.getElementById(args[i]);
    if (ele) parentHeight -= ele?.clientHeight;
  }

  return parentHeight - offset;
};

export const getScreenWidgetProperties = (screenId, widgetId, configId) => {
  return store.getState().UILayoutData.ScreenChildrenWidgetsProperties[
    screenId
  ][widgetId][configId];
};

export const logoutUser = () => {
  // TODO any cleanup work.
  promisifyCall(LoginFacade.logout);
  window.location.href = "http://localhost:9090/fmexchange/logout";
};

export const ticketFieldsToAgGridConfig = (ticketFieldsArray) => {
  let agGridHashMap = {};
  let agGridConfig = [];
  let agGridData = [];
  ticketFieldsArray.forEach((ticketFieldsObj) => {
    let rowData = {};
    const { ticketFields } = ticketFieldsObj;
    ticketFields.forEach((ticketField) => {
      if (agGridHashMap[ticketField.dataIndex] !== true) {
        let agGridConfigObj = {
          headerName: ticketField.text,
          field: ticketField.dataIndex,
          hide: ticketField.hidden,
          width: ticketField.width,
          type:
            ticketField.rendererTypes.length > 0
              ? ticketField.rendererTypes
              : ticketField.dataType,
        };
        agGridConfig.push(agGridConfigObj);
        agGridHashMap[ticketField.dataIndex] = true;
      }
      rowData[ticketField.dataIndex] = ticketField.value;
    });
    agGridData.push(rowData);
  });
  return { agGridConfig, agGridData };
};
export const pixelsToVh = (px) => {
  const viewportHeight = window.innerHeight;
  return (px / viewportHeight) * 100;
};

export const pixelsToVw = (px) => {
  const viewportWidth = window.innerWidth;
  return (px / viewportWidth) * 100;
};

export const playNotificationSoundGeneral = () => {
  const audio = new Audio("./audios/Notification.mp3");
  console.log("audio", audio);
  audio.play();
};

export const playNotificationSoundOrderUpdate = () => {
  const audio = new Audio("./audios/MarketOrderUpdate.wav");
  console.log("audio", audio);
  audio.play();
};

export const playNotificationSoundOrderMatch = () => {
  const audio = new Audio("./audios/OrderMatch.wav");
  console.log("audio", audio);
  audio.play();
};

export const playNotificationSoundOrderStatusChange = () => {
  const audio = new Audio("./audios/Swipe.mp3");
  console.log("audio", audio);
  audio.play();
};

export const playErrorNotification = () => {
  const audio = new Audio("./audios/Error.mp3");
  console.log("audio", audio);
  audio.play();
};
