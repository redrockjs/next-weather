import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import YandexProvider from "next-auth/providers/yandex"
import VkProvider from "next-auth/providers/vk"

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