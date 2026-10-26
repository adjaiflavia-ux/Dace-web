"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "@/components/ui/Logo";
import { CloseIcon } from "@/components/ui/Icons";
import { mainNav, site } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

// Menu plein écran pour mobile et tablette : fond cacao, grands liens éditoriaux.
export default function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    // Bloque le défilement de la page derrière le menu
    document.body.style.overflow = "hidden";
    // Place le focus clavier sur le bouton « fermer »
    closeButtonRef.current?.focus();
    // La touche Échap ferme le menu
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-cacao text-creme lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-18 items-center justify-between px-5 md:h-20 md:px-10">
            <Link href="/" onClick={onClose} aria-label="Ɖa ce — accueil">
              <Logo className="h-9 w-auto md:h-10" />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="grid size-11 place-items-center rounded-full hover:bg-creme/10"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <nav aria-label="Navigation principale" className="flex flex-1 flex-col justify-center px-5 md:px-10">
            <ul className="space-y-1">
              {mainNav.map((item, i) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-baseline gap-4 py-2"
                    >
                      <span className="w-6 text-xs tabular-nums text-ocre">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={[
                          "font-display text-5xl leading-none md:text-6xl",
                          active ? "italic text-ocre" : "group-hover:italic",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <p className="px-5 pb-8 text-xs uppercase tracking-[0.2em] text-creme/60 md:px-10">
            {site.tagline}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
