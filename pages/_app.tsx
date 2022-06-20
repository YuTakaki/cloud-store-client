/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import "../styles/globals.css"

function MyApp({ Component, pageProps } : AppProps) {
  useEffect(() => {
    console.log('asdasd');

  }, []);
  return (
    <>
    <Head>
      <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
    </Head>
    <Component {...pageProps} />
    
    </>
  )
}

export default MyApp
