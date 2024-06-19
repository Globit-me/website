"use server"

import { signOut } from "@/auth";

export const logout = async () => {
    await signOut({
        redirectTo: "/login"
      });
      console.log("Sign out");
}