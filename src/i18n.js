import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationPL from "./assets/i18n/translations/pl.json"
import translationEN from "./assets/i18n/translations/en.json"

const Constants = {
    "allowed_locales": ['pl','en'],
    "default_locale": 'pl'
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pl: {
                translations: translationPL
            },
            en: {
                translations: translationEN
            }
        },
        fallbackLng: "pl",
        debug: true,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true
        }
    }, () => {
        if (!Constants.allowed_locales.includes(i18n.language)) {
            i18n.changeLanguage(Constants.default_locale);
        }
        return;
    });

i18n.on('languageChanged', function (lng) {
    let newUrl = "/?lng=" + lng;
        window.location.replace(newUrl);
});

export default i18n