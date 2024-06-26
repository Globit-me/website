import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import  Footer  from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Globit",
  description: "Cambio de divisas en línea",
  openGraph: {
    type: "website",
    url: "https://globit.me",
    title: "Globit",
    description: "Cambio de divisas en línea",
    siteName: "Globit",
    images: [
      {
        url: "/public/logos/globit-logo.jpeg",
        width: 200,
        height: 200,
        alt: "Globit",
      }
    ]
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider session={session}>
          <Navbar />
          <div>{children}</div>
        </SessionProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
