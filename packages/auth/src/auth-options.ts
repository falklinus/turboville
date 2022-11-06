import { type NextAuthOptions } from 'next-auth'
import GoogleClientProvider from 'next-auth/providers/google'

import { prisma } from '@acme/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleClientProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_PERSONAL!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_PERSONAL!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
}
