import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { AppProps } from 'next/app';

// Client-side cache, shared for the whole session of the user in the browser.
function MyApp({ Component, pageProps } : AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
