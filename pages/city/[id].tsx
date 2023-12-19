import { Default } from '@layouts/index';
import { Main } from '@view/index';
import Head from 'next/head';

export default function CityPage() {
  return (
    <>
      <Head>
        <title>isCloudly-Next</title>
        <meta name="description" content="isCloudly-Next App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Default>
        <Main />
      </Default>
    </>
  );
}
