import '@styles/globals.css';
import type { Metadata } from 'next';
import { Locale } from '../../config/i18n.config';

export const metadata: Metadata = {
  title: {
    default: 'To-do List',
    template: '%s | Uhuu',
  },
  description: 'Poc Frontend',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params?.lang ?? 'pt-BR'}>
      <body>
        {/* <NextAuthProvider>
          <CustomThemeProvider options={{ key: 'mui' }} lang={params?.lang}> */}
        {children}
        {/* </CustomThemeProvider>
        </NextAuthProvider>
        <Analytics /> */}
      </body>
    </html>
  );
}
