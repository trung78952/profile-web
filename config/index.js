import en from '../lang/en-US.js'
import vn from '../lang/vn-VN.js'

export const I18N = {
  locales: [
    {
      code: 'vn',
      iso: 'vn-VN',
      name: 'Tiếng Việt'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
  ],
  defaultLocale: 'vn',
  vueI18n: {
    fallbackLocale: 'vn',
    messages: { en, vn }
  }
}
