// Informations générales du site, réutilisées partout (navbar, footer, SEO).

export const site = {
  name: "Ɖa ce",
  tagline: "Là où les tresses racontent.",
  description:
    "Ɖa ce explore les coiffures africaines à travers ce qu'elles racontent de nos cultures, de nos identités et de nos héritages.",
};

// Menu principal (pas de sous-menus, comme demandé dans le cahier des charges).
export const mainNav = [
  { label: "Accueil", href: "/" },
  { label: "Explorer", href: "/explorer" },
  { label: "Carte", href: "/carte" },
  { label: "Histoires", href: "/histoires" },
  { label: "À propos", href: "/a-propos" },
] as const;
