import { Locale } from '@config/i18n.config';

interface Options {
  key: string;
}
export interface CustomProviderProps {
  children: React.ReactNode;
  options: Options;
  lang?: Locale;
}
