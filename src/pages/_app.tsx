import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ErrorContent from '../components/ErrorBoundary/ErrorContent';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<ErrorContent error={null} errorInfo={null} />}>
      <Provider store={store}>
        <Head>
          <title>Naruto Characters Base</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}
