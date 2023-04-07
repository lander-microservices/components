const SHORT_CODES = [
    { code: "ringbaNumber", replacement: ({ number, city, state }) => `<a href="tel:${number}" class="callnow paragraph-btn"><b>${number}</b></a>` },
    { code: "city", replacement: ({ number, city, state }) => `<span class="">${city}</span>` },
    { code: "state", replacement: ({ number, city, state }) => `<span class="">${state}</span>` },
];

export const replaceShortCodes = (html, obj) => {
    SHORT_CODES.forEach((i) => {
        html = html.replaceAll(`{{ ${i.code} }}`, i.replacement(obj));
        html = html.replaceAll(`{{${i.code} }}`, i.replacement(obj));
        html = html.replaceAll(`{{ ${i.code}}}`, i.replacement(obj));
    });
    return html;
};

export default replaceShortCodes
// obj   will contain { number, city, state }`