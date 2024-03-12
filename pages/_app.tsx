import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import { useEffect, useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { useUserStore } from '@store/index';
import { getAccountFn } from '@api/index';

const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin', 'cyrillic'],
  variable: '--open-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const { setAccount } = useUserStore();
  const account = useUserStore((state) => state.account);

  useEffect(() => {
    async function getAccount() {
      return await getAccountFn();
    }

    if (account === null) {
      getAccount()
        .then((res) => {
          setAccount(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <main className={openSans.className}>
          <Component {...pageProps} />
          <Toaster position="top-center" reverseOrder={false} gutter={8} />
        </main>
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
