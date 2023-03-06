import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { RecipesProvider } from 'contexts/RecipesProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecipesProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </RecipesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
