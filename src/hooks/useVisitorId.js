import React, { useState, useEffect } from "react";
import { localStorageKeys } from "../config/sessionStorageKeys";
import { v4 } from "uuid"

export function useVisitorId() {
    const [visitorId, setVisitorId] = useState("");

    const checkOrCreateVisitorId = () => {
        const localStorageVisitorId = localStorage.getItem(
            localStorageKeys.visitorId
        );
        if (localStorageVisitorId) {
            setVisitorId(localStorageVisitorId)
        } else {
            const newVisitorId =  'VISITOR_ID' + v4().toUpperCase() + '.' + v4().toUpperCase()
            localStorage.setItem(localStorageKeys.visitorId, newVisitorId);
            setVisitorId(newVisitorId)
        }
    };

    useEffect(() => {
        checkOrCreateVisitorId()
    }, [])
    console.log('visitoid', visitorId)
    return { visitorId }
}

export default useVisitorId;