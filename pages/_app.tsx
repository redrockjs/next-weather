import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin', 'cyrillic'],
  variable: '--open-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
