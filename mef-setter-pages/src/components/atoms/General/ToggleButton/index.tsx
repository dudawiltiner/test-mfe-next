'use client';
import { ColorModeContext } from '@context/CustomThemeProvider';
import { Brightness2, Brightness7 } from '@mui/icons-material';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';

export function ToggleButton() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness2 />}
      </IconButton>
    </Box>
  );
}
