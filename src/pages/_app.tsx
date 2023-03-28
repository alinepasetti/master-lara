import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { RecipesProvider } from 'contexts/RecipesProvider';
import { PantryProvider } from 'contexts/PantryProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Master Lara</title>
      </Head>
      <ThemeProvider theme={theme}>
        <RecipesProvider>
          <PantryProvider>
            <Component {...pageProps} />
            <GlobalStyles />
          </PantryProvider>
        </RecipesProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
