import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/AOSF.png" type="image/x-icon" />
          <meta
            name="description"
            content="A React.js animation library made to make adding animating into view easier for all React.js developers"
          />
          <meta property="og:image" content="/AOSF.png" />
          <meta property="og:title" content="AOSF" />{" "}
          <meta
            property="twitter:title"
            content="AOSF: Animate On Scroll Framer"
          />
          <meta property="twitter:image" content="/AOSF.png" />
          <meta
            property="twitter:description"
            content="A React.js animation library made to make adding animating into view easier for all React.js developers"
          />
        </Head>
        <body className="selection:bg-black overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
