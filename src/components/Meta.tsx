import Head from 'next/head'

const Meta = () => {
    const title = 'Ducky Windows'
    const description = 'Window washing in the Golden Gate Estates.'
    const url = 'https://duckywindows.vercel.app/'

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={url} />
            <link rel="icon" type="image/png" href={`${url}/img/duck.png`} />
            <meta property="og:image" content={`${url}/img/blue-banner.jpg`} />
            <meta name="twitter:image" content={`${url}/img/blue-banner.jpg`} />
        </Head>
    )
}

export default Meta