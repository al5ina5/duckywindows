import Document, { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/Meta'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Meta />
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                </Head>
                <body>
                    <div id="myportal" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
