import {defineI18nConfig} from "#i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'de',
  modifiers: {
    // @ts-ignore
    snakeCase: (str: string) => str.split(' ').join('-')
  }
}))
