import type { Metadata } from "next";
import "./globals.css";
import { fraunces, montserrat } from "@/lib/fonts";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

// Cadre commun à toutes les pages : Navbar en haut, Footer en bas.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body className="flex min-h-svh flex-col">
        {/* Lien d'évitement : visible seulement au clavier (touche Tab) */}
        <a
          href="#contenu"
          className="sr-only z-[100] bg-cacao px-4 py-2 text-creme focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
