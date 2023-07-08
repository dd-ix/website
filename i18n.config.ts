import en from './lang/en.json';
import de from './lang/de.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'de',
  messages: {en, de}
}))
