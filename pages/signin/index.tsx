import Head from "next/head";
import {Header} from "../../layouts";
import {SignIn} from "../../content/SignIn";

export default function _signIn() {
    return <>
        <Head>
            <title>isClowdly2 Weather app</title>
        </Head>
        <Header/>
        <SignIn/>
    </>
}