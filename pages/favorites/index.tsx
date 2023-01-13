import Head from "next/head";
import {Header} from "../../layouts";
import {Favorites} from "../../content";

export default function _favorites() {
    return <>
        <Head>
            <title>isClowdly2 Weather app</title>
        </Head>
        <Header/>
        <Favorites/>
    </>
}