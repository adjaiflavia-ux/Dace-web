"use client";
// "use client" : ce composant réagit au scroll et aux clics,
// il doit donc tourner dans le navigateur.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { MenuIcon, SearchIcon } from "@/components/ui/Icons";
import MobileMenu from "@/components/layout/MobileMenu";
import { mainNav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sur l'accueil, la navbar est transparente par-dessus la photo du Hero,
  // puis prend un fond crème dès qu'on fait défiler la page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial",
          overHero
            ? "bg-transparent text-creme"
            : "border-b border-cacao/10 bg-creme/95 text-cacao backdrop-blur-sm",
        ].join(" ")}
      >
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10"
        >
          <Link href="/" aria-label="Ɖa ce — accueil" className="shrink-0">
            <Logo className="h-9 w-auto md:h-10" />
          </Link>

          {/* Menu desktop */}
          <ul className="hidden items-center gap-9 lg:flex">
            {mainNav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.18em]"
                  >
                    {item.label}
                    {/* Trait sous le lien : plein si page active, apparaît au survol sinon */}
                    <span
                      className={[
                        "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ease-editorial",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <Link
              href="/recherche"
              aria-label="Rechercher"
              className="grid size-11 place-items-center rounded-full transition-colors hover:bg-current/10"
            >
              <SearchIcon className="size-5" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              className="grid size-11 place-items-center rounded-full transition-colors hover:bg-current/10 lg:hidden"
            >
              <MenuIcon className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hors accueil, on réserve la hauteur de la navbar pour ne pas cacher le contenu */}
      {!isHome && <div aria-hidden className="h-18 md:h-20" />}

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
