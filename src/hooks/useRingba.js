
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const CLICK_ID = "vl-cid";
const RINGBA_SCRIPT_ID = "ringba-script-id";

const keys = {
    reloadRingbaScript: "reloadRingbaScript",
    ringbaData: "ringbaData",
    isClickIdSent: "isClickIdSent",
}

export const RINGBA_STORAGE_KEYS = keys;

export const removeRingbaAndNavigate = (path) => {
    const elem = window.document.getElementById(RINGBA_SCRIPT_ID);
    if (elem) elem.remove();

    const keys = Object.keys(window.localStorage).filter((i) => {
        return i.includes("ringbaNumber");
    });

    keys.forEach((a) => localStorage.removeItem(a));

    window.localStorage.setItem(keys.reloadRingbaScript, path);
    window.location.reload();
    window.location.href = path;
};

export function useRingba() {
    const storeInSessionStorage = (values) => {
        const isExists = localStorage.getItem(keys.ringbaData);

        if (isExists) {
            const parsed = JSON.parse(isExists);
            parsed.push(values);
            localStorage.setItem(
                keys.ringbaData,
                JSON.stringify(parsed)
            );
        } else {
            localStorage.setItem(
                keys.ringbaData,
                JSON.stringify([values])
            );
        }
    };

    const storeRgbaData = (key, value) => {
        if (
            key === "click_id" &&
            sessionStorage.getItem(keys.isClickIdSent)
        )
            return;
        if (key === "click_id")
            sessionStorage.setItem(keys.isClickIdSent, "true");

        let rgbaPattern = { [key]: value || "" };
        if (key === "generator")
            rgbaPattern = { [key]: value || "internal" };
        if (Array.isArray(window._rgba_tags)) {
            storeInSessionStorage(rgbaPattern);
            window._rgba_tags.push(rgbaPattern);
        } else {
            window._rgba_tags = [rgbaPattern];
        }
    };

    const removeRingba = removeRingbaAndNavigate;
    return { storeRgbaData, removeRingba };
}

export function useInitRingba({ ringbaKey }) {

    const [num, setNum] = useState();
    const [clickId, setClickId] = useState();

    try {
    } catch (error) {
        console.log(error);
    }

    useEffect(() => {
        setClickId(Cookies.get(CLICK_ID));
    }, [Cookies.get(CLICK_ID)]);

    const setInitialValue = () => {
    };

    useEffect(() => {
        if (ringbaKey && ringbaKey.key) {

            (function (e, d) {
                var ringba_com_tag = ringbaKey.key;

                var _sc = d.getElementsByTagName("script"),
                    _s = _sc[_sc.length - 1];
                e._rgba = e._rgba || { q: [] };
                e._rgba.q.push({
                    tag: ringba_com_tag,
                    cb: GetNumber,
                    render: false,
                    script: _s,
                });
                if (!(e._rgba.loading = !!e._rgba.loading)) {
                    var sc = d.createElement("script");
                    sc.id = RINGBA_SCRIPT_ID;
                    sc.type = "text/javascript";
                    sc.async = true;
                    sc.src = "//js.callcdn.com/js_v3/min/ringba.com.js";
                    var s = d.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(sc, s);
                    e._rgba.loading = true;
                }
            })(window, document);
            function GetNumber(number, tagId, firstTime) {
                window.pnumber = number;
                setNum(number);
            }

            window._rgba_tags = window._rgba_tags || [];

        }
    }, [ringbaKey])

    return {
        number: num ? num : ringbaKey && ringbaKey.number,
        staticNumber: ringbaKey && ringbaKey.number,
        setInitialValue,
        clickId,
    };
}
