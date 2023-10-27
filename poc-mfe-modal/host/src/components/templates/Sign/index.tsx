import BackgroundImage from '@components/atoms/General/BackgroundImage';
import SelectLanguage from '@components/atoms/General/SelectLanguange';
import { ToggleButton } from '@components/atoms/General/ToggleButton';
import { Locale } from '@config/i18n.config';
import { Box, Container, Stack } from '@mui/material';
import { BoxStyle, ContainerStyle } from './styles';

interface SignTemplateProps {
  children: React.ReactNode;
  lang: Locale;
  hasi18n: boolean;
}

export default function SignTemplate({
  children,
  lang,
  hasi18n,
}: SignTemplateProps) {
  return (
    <Container style={ContainerStyle}>
      <Box style={BoxStyle}>
        <BackgroundImage />
      </Box>
      <Stack width={'50%'} justifyContent={'center'} alignItems={'center'}>
        <Stack
          marginTop={3}
          direction={'row'}
          justifyContent={'space-between'}
          width={'100%'}
          maxWidth={'300px'}
        >
          {hasi18n && <SelectLanguage lang={lang} />}
          <ToggleButton />
        </Stack>
        {children}
      </Stack>
    </Container>
  );
}
