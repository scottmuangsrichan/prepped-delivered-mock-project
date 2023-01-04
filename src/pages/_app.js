import '/styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { createClient, Provider } from 'urql';

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps } 
}) {
  return(
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        </SessionProvider>
    </>
  ) 
}

export default MyApp
