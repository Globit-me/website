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
  icons: {
    icon: [
      {
        url: '/logos/globit-icon-white.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logos/globit-icon-blue.webp',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://globit.me",
    title: "Globit",
    description: "Cambio de divisas en línea",
    siteName: "Globit",
    images: [
      {
        url: "/logos/globit-logo.avif",
        width: 400,
        height: 400,
        alt: "Globit",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@globit",
    creator: "@globit",
    images: "/logos/globit-logo.jpeg"
  },
  alternates: {
    canonical: "https://globit.me",
  }
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
