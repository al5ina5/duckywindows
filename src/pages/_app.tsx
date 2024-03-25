import type { AppProps } from 'next/app'
import Meta from '../components/Meta'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Meta />
            <Component {...pageProps} />
        </>
    )
}
