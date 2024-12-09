import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/providers/Providers";
import Head from "next/head";
import manifest from "@/public/manifest.json";

export const metadata: Metadata = {
  title: "Myco Chat",
  description: manifest.description,
  themeColor: "#F2E8CC",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-nounish overflow-hidden">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F2E8CC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
