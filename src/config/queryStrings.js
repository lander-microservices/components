import { ACC_ID, CLICK_ID, FBCLID, GCLID, GENERATOR, GRBAID, LANGUAGE, PLACEMENT, SITE_ID, UTM_AD, UTM_ADSET, UTM_CAMPAIGN, UTM_MEDIUM, UTM_SOURCE, WBRAID } from "./constants"
import { RINGBA_STORAGE_KEYS } from "./ringbaStorageKeys"

export const QUERY_STRINGS = [
    {
        redirectString: GENERATOR,
        ringbaKey: RINGBA_STORAGE_KEYS.generator
    },
    {
        redirectString: CLICK_ID,
        ringbaKey: RINGBA_STORAGE_KEYS.click_id
    },
    {
        redirectString: UTM_SOURCE,
        ringbaKey: RINGBA_STORAGE_KEYS.utm_source
    },
    {
        redirectString: UTM_MEDIUM,
        ringbaKey: RINGBA_STORAGE_KEYS.utm_medium
    },
    {
        redirectString: UTM_CAMPAIGN,
        ringbaKey: RINGBA_STORAGE_KEYS.utm_campaign
    },
    {
        redirectString: UTM_ADSET,
        ringbaKey: RINGBA_STORAGE_KEYS.utm_adset
    },
    {
        redirectString: UTM_AD,
        ringbaKey: RINGBA_STORAGE_KEYS.utm_ad
    },
    {
        redirectString: SITE_ID,
        ringbaKey: RINGBA_STORAGE_KEYS.site_id
    },
    {
        redirectString: LANGUAGE,
        ringbaKey: RINGBA_STORAGE_KEYS.language
    },
    {
        redirectString: PLACEMENT,
        ringbaKey: RINGBA_STORAGE_KEYS.placement
    },
    {
        redirectString: ACC_ID,
        ringbaKey: RINGBA_STORAGE_KEYS.acc_id
    },
    {
        redirectString: FBCLID,
        ringbaKey: RINGBA_STORAGE_KEYS.fbclid
    },
    {
        redirectString: GCLID,
        ringbaKey: RINGBA_STORAGE_KEYS.gclid
    },
    {
        redirectString: GRBAID,
        ringbaKey: RINGBA_STORAGE_KEYS.grbaid
    },
    {
        redirectString: WBRAID,
        ringbaKey: RINGBA_STORAGE_KEYS.wbraid
    }
]

export default QUERY_STRINGS