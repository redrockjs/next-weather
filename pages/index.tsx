import Head from 'next/head'
import {Main} from '../content';
import {Header} from "../layouts";


export default function Home() {
    return (
        <>
            <Head>
                <title>isClowdly2 Weather app</title>
            </Head>
            <Header/>
            <Main/>
        </>
    )
}
