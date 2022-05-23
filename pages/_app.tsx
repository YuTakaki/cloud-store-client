import { AppProps } from 'next/app';
import { useEffect } from 'react';
import "../styles/globals.css"

function MyApp({ Component, pageProps } : AppProps) {
  useEffect(() => {
    console.log('asdasd');

  }, []);
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
