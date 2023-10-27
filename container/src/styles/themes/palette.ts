import { PaletteMode, PaletteOptions } from '@mui/material';

export const generatePaletteWithDarkMode = (
  mode: PaletteMode
): PaletteOptions => {
  return {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            light: '#F2F8F8',
            main: '#ee3680',
            dark: '#ee3680',
          },
          secondary: {
            light: '#F2F8F8',
            main: '#6900b2',
            dark: '#6900b2',
          },
        }
      : {
          background: {
            default: '#121212 !important',
          },
          secondary: {
            light: '#F2F8F8',
            main: '#ee3680',
            dark: '#ee3680',
          },
          primary: {
            light: '#F2F8F8',
            main: '#6900b2',
            dark: '#6900b2',
          },
        }),
  };
};
