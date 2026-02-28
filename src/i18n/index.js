import { createI18n } from "vue-i18n";
import fr from './fr'
import en from './en'

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: { fr, en },
})

export default i18n