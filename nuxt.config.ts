// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
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
    vueI18n: 'i18n.config.ts'
  }
})
