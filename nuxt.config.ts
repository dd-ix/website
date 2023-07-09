// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  ssr: true,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
    }
  },
  css: [
    "@fontsource/dm-sans/400.css",
    "@fontsource/dm-sans/400-italic.css",
    "@fontsource/dm-sans/700.css",
    "@fontsource/dm-sans/700-italic.css",
    "assets/style.scss"
  ],
  telemetry: false,
  typescript: {strict: true},
  i18n: {
    vueI18n: 'i18n.config.ts',
    langDir: 'locales',
    lazy: false,
    baseUrl: 'http://localhost:3000',
    locales: [
      {code: 'en', iso: 'en-US', file: 'en.json', name: 'English'},
      {code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch'},
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
  }
})
