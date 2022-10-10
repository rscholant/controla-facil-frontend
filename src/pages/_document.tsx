import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from '@styles/index';
import { ServerStyleSheets } from '@mui/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
    const materialSheets = new ServerStyleSheets();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              materialSheets.collect(<App emotionCache={cache} {...props} />)
            )
        });

      const initialProps = await Document.getInitialProps(ctx);
      const emotionStyles = extractCriticalToChunks(initialProps.html);
      const emotionStyleTags = emotionStyles.styles.map(stl => (
        <style
          data-emotion={`${stl.key} ${stl.ids.join(' ')}`}
          key={stl.key}
          dangerouslySetInnerHTML={{ __html: stl.css }}
        />
      ));

      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          ...emotionStyleTags,
          sheet.getStyleElement(),
          materialSheets.getStyleElement()
        ]
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
