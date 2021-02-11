//import '../styles/globals.css'
import { Head } from 'next/document'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import themes from '../styles/themes'

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={themes.main}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	)
}
