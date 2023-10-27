import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Poppins } from 'next/font/google';

const poppins400 = Poppins({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-poppins-400',
  subsets: ['latin'],
  display: 'swap',
});

export const typography: TypographyOptions = {
  h2: {
    fontFamily: `${poppins400.style.fontFamily}`,
    fontSize: '42px',
    lineHeight: '72px',
    letterSpacing: '0.01em',
  },
  h3: {
    fontFamily: `${poppins400.style.fontFamily}`,
    fontSize: '32px',
    lineHeight: '72px',
    letterSpacing: '0.01em',
  },
  h4: {
    fontFamily: `${poppins400.style.fontFamily}`,
    fontSize: '22px',
    lineHeight: '72px',
    letterSpacing: '0.01em',
  },
  h5: {
    fontFamily: `${poppins400.style.fontFamily}`,
    fontSize: '18px',
    lineHeight: '72px',
    letterSpacing: '0.01em',
  },
  body1: {
    fontFamily: `${poppins400.style.fontFamily}`,
    fontSize: '14px',
    lineHeight: 'normal',
    letterSpacing: '0.01em',
  },
};
