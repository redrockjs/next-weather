import {Html, Head, Main, NextScript} from 'next/document'

const globalStyles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Get current weather"/>
                <link rel="icon" href="/favicon.ico"/>
                <style type='text/css'>{globalStyles}</style>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
