import '@/styles/globals.css';
import ScrollObserver from '@/utils/scroll-observer';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
      </ScrollObserver>

  );
}

export default MyApp;
