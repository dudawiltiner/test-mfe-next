import { Locale } from '@config/i18n.config';
import { PaletteMode } from '@mui/material';
import * as locales from '@mui/material/locale';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { generatePaletteWithDarkMode } from './palette';
import { typography } from './typography';

const themeOptions = (mode: PaletteMode): ThemeOptions => {
  const palette = generatePaletteWithDarkMode(mode);
  return {
    palette,
    typography,
  };
};

const theme = (lang: Locale, mode: PaletteMode) => {
  const locale = lang.replace('-', '') as 'ptBR';
  const themLocale = locales[locale];
  return createTheme(themeOptions(mode), themLocale);
};
export default theme;
