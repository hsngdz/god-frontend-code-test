import Head from "next/head";
import { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
// No global styles needed for now
// import "../public/css/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Enabled strict mode through next config
    <StyleProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Front-end coding test for Volvo Cars"
        />
        <title>Volvo Cars</title>
      </Head>
      <ThemePicker variant="light">
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}

// Moved HomePage to index.tsx because onDemandEntries client couldn't fetch http://localhost:3000 (404 error)
