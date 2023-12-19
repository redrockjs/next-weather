import Head from 'next/head';
import { Default } from '@layouts/index';
import { SignIn } from '@view/index';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>isCloudly-Next</title>
        <meta name="description" content="isCloudly-Next App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <SignIn />
      </Default>
    </>
  );
}
