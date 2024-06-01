"use client";

import { signIn } from "next-auth/react"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
    const onClick = (provider: "google" | "apple") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
        <Button
            size="lg"
            className="w-full flex items-center justify-start border border-gray-400"
            variant="outline"
            onClick={() => onClick("google")}
        >
            <Image src="/brands/google.svg" alt="Google" width={24} height={24} />
            <span className="flex-grow text-center">Continuar con Google</span>
        </Button>
        <Button
            size="lg"
            className="w-full flex items-center justify-start border border-gray-400"
            variant="outline"
            onClick={() => {}}
        >
            <Image src="/brands/apple.svg" alt="Apple" width={24} height={24} />
            <span className="flex-grow text-center">Continuar con Apple</span>
        </Button>
    </div>
  );
}

export default Social;