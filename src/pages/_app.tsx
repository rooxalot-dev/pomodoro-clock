//import '../styles/globals.css'
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.main}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
