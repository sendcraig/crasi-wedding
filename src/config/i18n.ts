import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../assets/docs/translations.json';

i18n.use(initReactI18next).init({
  resources: translations,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  },
});

export default i18n;
