// import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="description" content="Rami Maalouf's portfolio website" />
          <meta name="author" content="Rami Maalouf" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
