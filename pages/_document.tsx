import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='./assets/favicon-32x32.png'
          />
        </Head>
        <body className='bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
