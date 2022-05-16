import { GetServerSideProps, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import "../styles/globals.css"
import { get } from '../utils/requests';

function MyApp({ Component, pageProps } : AppProps) {
  useEffect(() => {
    console.log('asdasd');

  }, []);
  return (
      <Component {...pageProps} />
  )
}

MyApp.getInitialProps = async({ctx}: any) => {
  const props = {};
  try {
    console.log(ctx.req)
    const verifyToken = await get('/api/auth/verify', {
      header : {
        Cookie: ctx.req!.headers.cookie!
      }
    });

    // console.log(verifyToken);
    
  } catch (error) {
    // console.log(error, 'yutakaki'); 
  }
  return {
    props
  }

}

export default MyApp
