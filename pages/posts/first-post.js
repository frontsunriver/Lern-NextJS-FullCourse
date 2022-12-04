import Link from "next/link";
import Head from 'next/head';
import layout from "../../components/layout";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <script src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={ () => {
                    console.log(`script loaded correctly, window.F8 has been populated`)
                }}></script>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
        </Layout>
    )
}