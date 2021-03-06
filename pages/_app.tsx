/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import "../styles/globals.css"
import { store } from '../store/store'

function MyApp({ Component, pageProps } : AppProps) {
  useEffect(() => {
    console.log('asdasd');

  }, []);
  return (
    <Provider store={store}>
      <Head>
        <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
      </Head>
      <Component {...pageProps} />
    
    </Provider>
  )
}

export default MyApp
