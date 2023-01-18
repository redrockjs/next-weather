import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import YandexProvider from "next-auth/providers/yandex"
import VkProvider from "next-auth/providers/vk"
import { FirestoreAdapter} from "@next-auth/firebase-adapter"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string
    })
  ],
  //TODO Не соединяется с БД, ошибка GRPC
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }),
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, account, profile, user }) {
      return token
    },
    async session({ session, token, user }) {
      session.uid = token.sub as string
      return session
    }
  }
}

export default NextAuth(authOptions)