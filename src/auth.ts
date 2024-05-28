import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

 
export const { 
    handlers: { GET, POST },
    auth,
    signIn,
    signOut, 
} = NextAuth({
  callbacks: {
    // async signIn({ user }) {
    //   if (user.id) {
    //     const existingUser = await getUserById(user.id);
    //     if (!existingUser || !existingUser.emailVerified) {
    //        return false;
    //     }
    //   }
    //   return true;
    // },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt"},
  ...authConfig,
});