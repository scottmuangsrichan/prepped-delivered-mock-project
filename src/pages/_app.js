import '/styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { createClient, Provider } from 'urql';
import ShopProvider from '../context/shopContext';

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps } 
}) {
  return(
    <>
    <ShopProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        </SessionProvider>
    </ShopProvider>
    </>
  ) 
}

export default MyApp
