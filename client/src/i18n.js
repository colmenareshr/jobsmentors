import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '../src/locals/es.json'
import pt from '../src/locals/pt.json'
import en from '../src/locals/en.json'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        ...es
      }
    },
    pt: {
      translation: {
        ...pt
      }
    },
    en: {
      translation: {
        ...en
      }
    }
  },
  lng: localStorage.getItem('lang') || 'es',
  fallbackLng: 'pt',

  interpolation: {
    escapeValue: false
  }
})
