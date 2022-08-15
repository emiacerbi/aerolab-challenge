import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="This a solution for the Aerolab's E-commerce Challenge."
        />

        <link rel="icon" href="/icons/aerolab-logo.svg" />

      </Head>
      <body className="bg-primary-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
