import NextAuth, { type DefaultSession } from "next-auth"
import { Exo } from "next/font/google";
 
export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  role: "ADMIN" | "USER";
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}