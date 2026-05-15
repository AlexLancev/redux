import { THEME_SET } from '../types';
import { Theme, THEME_STORAGE_KEY } from '../theme';

export const selectTheme = (state) => state.theme;

function readStoredTheme() {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === Theme.Light || raw === Theme.Dark) return raw;
  } catch {}
  
  return Theme.Light;
}

const initialState = readStoredTheme();

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case THEME_SET:
      return action.payload === Theme.Light || action.payload === Theme.Dark
        ? action.payload
        : state;

    default:
      return state;
  }
}
