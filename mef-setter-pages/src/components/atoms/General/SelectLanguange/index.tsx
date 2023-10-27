'use client';
import { i18n } from '@config/i18n.config';
import { Language } from '@mui/icons-material';
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SelectLanguage({ lang }: { lang: string }) {
  const [selectedLocale, setSelectedLocale] = useState('pt-BR');
  const rounter = useRouter();
  const pathname = usePathname();
  const path = pathname.toString().replace(`/${lang}`, '');

  const { push } = rounter;

  useEffect(() => {
    setSelectedLocale(lang);
  }, [lang]);

  return (
    <FormControl size="small" variant="outlined" sx={{ minWidth: 120 }}>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={selectedLocale}
        size="small"
        onChange={({ target }) => {
          push(`/${target.value}/${path}`);
        }}
      >
        {i18n.locales.map((locale) => (
          <MenuItem key={locale} value={locale}>
            <Stack direction={'row'} spacing={1}>
              <Language fontSize="small" />
              <Typography variant="body1">{locale}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
