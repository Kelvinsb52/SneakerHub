export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import {Julius_Sans_One} from "next/font/google"
import "./globals.css";
import { Italiana } from "next/font/google";
import UserContextProvider from "../context/UserContextProvider";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
});

const julius_sans_one = Julius_Sans_One({
  subsets:["latin"],
  weight: ["400"],
  variable: "--font-julius"
})


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Lux",
  description: "Lux, the resellers friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable} ${italiana.variable} ${julius_sans_one.variable}`}>
        <UserContextProvider>
          {children}
        </UserContextProvider>
        </body>
    </html>
  );
}