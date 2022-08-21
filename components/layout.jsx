import Footer from "./footer";
import Header from "./header";
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <Head>
                <title>NowodK_Portfolio</title>
                <meta name="description" content="Welcome NowodK Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}