import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import favicon from '../../public/favicon.png';

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
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8"/> 
          <meta name="description" content="Separe suas tarefas do dia-a-dia com um timer personalizado com a metodologia Pomodoro. Comece agora a turbinar a sua produtividade!"/>
          <meta name="keywords" content="pomodoro, timer, relogio, cronometro, produtividade, 1980, metodologia"/>
          <meta name="robots" content="index, follow"/> 
          <link rel="icon" type="image/png" href={favicon}/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet"></link>
          <title>Pomodoro Timer - Turbine sua produtividade!</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
