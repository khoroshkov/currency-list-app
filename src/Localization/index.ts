import resources from './resources';
import { SELECTED_LANGUAGE_KEY } from '../constants';

export const config = {
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  lng: localStorage.getItem(SELECTED_LANGUAGE_KEY) || 'en',
  fallbackLng: 'en',
  resources
};

export { resources };
