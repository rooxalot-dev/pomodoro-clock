import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import siteContent from '../content'
import favicon from '../../public/favicon.png'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang='pt'>
				<Head>
					<meta charSet='utf-8' />
					<meta name='description' content={siteContent.description} />
					<meta name='keywords' content={siteContent.metaContent} />
					<meta name='robots' content='index, follow' />
					<script
						data-ad-client='ca-pub-2664290671903722'
						async
						src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
					></script>
					{/*  Google Analytics  */}
					<script src='/ga.js' async></script>
					{/* End Google Analytics */}
					{/* Global site tag (gtag.js) - Google Analytics */}
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=UA-189462956-1'
					></script>
					<script src='/tag.js' async></script>
					{/* End Global site tag (gtag.js) - Google Analytics */}
					<link rel='icon' type='image/png' href={favicon} />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
						rel='stylesheet'
					></link>
					<title>{siteContent.title}</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
