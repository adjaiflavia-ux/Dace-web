import Link from "next/link";
import Logo from "@/components/ui/Logo";
import BraidLine from "@/components/ui/BraidLine";
import { mainNav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cacao text-creme">
      <BraidLine className="h-4 w-full text-ocre/50" />

      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Logo + phrase */}
          <div className="md:col-span-6 lg:col-span-7">
            <Logo className="h-20 w-auto md:h-28" />
            <p className="font-display mt-8 max-w-sm text-2xl font-light italic leading-snug text-creme/90 md:text-3xl">
              Chaque tresse est un fil entre passé et présent.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page" className="md:col-span-3 lg:col-span-2">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ocre">
              Parcourir
            </h2>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-creme/80 transition-colors hover:text-creme hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Démarche */}
          <div className="md:col-span-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ocre">
              Notre démarche
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-creme/80">
              Chaque contenu est replacé dans son contexte (pays, région, communauté, époque) et
              accompagné de ses sources.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-creme/15 pt-6 text-xs text-creme/60 md:flex-row md:justify-between">
          <p>© {year} {site.name}. {site.tagline}</p>
          <p>Tresses · Culture · Histoires</p>
        </div>
      </div>
    </footer>
  );
}
