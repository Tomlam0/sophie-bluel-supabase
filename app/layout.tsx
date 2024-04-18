import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Nav from "@/components/layout/Nav";
const Footer = dynamic(() => import("@/components/layout/Footer"));
import BackToTopButton from "@/components/common/BackToTopButton";

import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sophie Bluel - Architecte d'intérieur",
  description:
    "Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} mx-auto mt-8 flex flex-col bg-background px-4 selection:bg-secondary selection:text-background md:px-8 lg:px-16 xl:max-w-7xl`}
      >
        <NextTopLoader color="#93532F" height={5} showSpinner={false} />
        <BackToTopButton />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
