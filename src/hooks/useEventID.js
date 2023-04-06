import { sessionStorageKeys } from "../config/sessionStorageKeys";
import { v4 } from "uuid";
import Cookies from "js-cookie";

const addEventIdToCookie = (eventID) => {
  const domainName = window.location.host.replace("lander.", "");
  Cookies.set("eventID", eventID);
  Cookies.set("eventID", eventID, {
    domain: domainName,
  });
};

export function useEventID() {
  const isEventIdExists = sessionStorage.getItem(sessionStorageKeys.eventID);
  if (isEventIdExists) {
    addEventIdToCookie(isEventIdExists);
    return isEventIdExists;
  } else {
    const newEventID =  'EVENT_ID' + v4().toUpperCase() + '.' + v4().toUpperCase();
    addEventIdToCookie(newEventID);
    sessionStorage.setItem(sessionStorageKeys.eventID, newEventID);
    return newEventID;
  }
}
export default useEventID;