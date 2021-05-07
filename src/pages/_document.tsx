import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Ubuntu:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFFFFF" />
          <meta name="theme-color" content="#fff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Mirante Vidros  - Transparência é o nosso negócio"
          />
          <title>
            Mirante Vidros | Vidraçaria | Transparência é o nosso negocio.
          </title>
          <link rel="canonical" href="https://www.mirantevidros.com.br" />
          <meta
            property="og:title"
            content="Mirante Vidros | Vidros Acústicos | Brasil"
          />
          <meta
            property="og:description"
            content="Mirante Vidros  - Transparência é o nosso negócio"
          />
          <meta property="og:url" content="https://www.mirantevidros.com.br" />
          <meta property="og:site_name" content="mirante vidros" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Mirante Vidros | Vidros Acústicos | Brasil"
          />
          <meta
            name="twitter:description"
            content="Mirante Vidros  - Transparência é o nosso negócio"
          />
          <meta
            name="keywords"
            content="Box, Esquadrias, Vidros acústicos, fachamentos, sacadas, vidros temperados"
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
