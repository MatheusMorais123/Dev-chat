import type { AppProps } from 'next/app';
import { initFirebaseBackend } from '@/helpers/firebase';
import { Provider } from 'react-redux';
import { configureStore } from '@/redux/store';
import { GlobalStyle } from '../styles/global';

initFirebaseBackend();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={configureStore()}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
