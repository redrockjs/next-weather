import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react"
import {Provider} from "react-redux";
import {store} from "../store/store";

export default function App({
                              Component,
                              pageProps: {session, ...pageProps}
                            }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}
