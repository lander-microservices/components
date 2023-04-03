import React, { useState , useEffect} from "react";
import { localStorageKeys} from "../config/sessionStorageKeys";
import { v4 as uuid } from "uuid"

export function useVisitorId() {
    const [visitorId, setVisitorId] = useState("");

    const checkOrCreateVisitorId = () => {
        const localStorageVisitorId = localStorage.getItem(
            localStorageKeys.visitorId
        );
        if (localStorageVisitorId) {
            setVisitorId(localStorageVisitorId)
        } else {
            const newVisitorId = uuid();
            localStorage.setItem(localStorageKeys.visitorId, newVisitorId);
            setVisitorId(newVisitorId)
        }
    };

    useEffect(() => {
        checkOrCreateVisitorId()
    }, [])

    return { visitorId }
}

export default useVisitorId;