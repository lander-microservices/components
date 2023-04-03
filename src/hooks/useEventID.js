import { sessionStorageKeys } from "../config/sessionStorageKeys";
import { v4 as uuid } from "uuid";
import Cookies from "js-cookie";

const addEventIdToCookie = (eventID) => {
  Cookies.set("eventID", eventID);
  // Cookies.set("eventID", eventID, {
  //   domain: process.env.REACT_APP_DOMAIN_NAME.toLowerCase(),
  // });
};

export function useEventID() {
  const isEventIdExists = sessionStorage.getItem(sessionStorageKeys.eventID);
  if (isEventIdExists) {
    addEventIdToCookie(isEventIdExists);
    return isEventIdExists;
  } else {
    const newEventID = uuid();
    addEventIdToCookie(newEventID);
    sessionStorage.setItem(sessionStorageKeys.eventID, newEventID);
    return newEventID;
  }
}
export default useEventID;