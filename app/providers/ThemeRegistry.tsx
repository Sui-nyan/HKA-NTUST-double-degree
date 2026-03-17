"use client";

import * as React from 'react';
import {CacheProvider} from '@emotion/react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import createEmotionCache from '@/lib/createEmotionCache';
import theme from '@/lib/theme';

interface Props {
  children: React.ReactNode;
}

export default function ThemeRegistry({children}: Props) {
  // Client-side cache (fresh instance)
  const clientCache = React.useMemo(() => createEmotionCache(), []);

  return (
    <CacheProvider value={clientCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
