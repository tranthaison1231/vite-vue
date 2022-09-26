import { createI18n } from "vue-i18n";
import en from "#/configs/locales/en.json";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "en",
  fallbackLocale: "en",
  messages: {
    en: en,
  },
});

export default i18n;
