// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";

import enTranslation from "./locales/en.json";
import ptbrTranslation from "./locales/pt-br.json";
//develop only in enligh for now, then add ptbr and spanish

i18n
  .use(XHR)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      ptbr: { translation: ptbrTranslation },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ptbr"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;