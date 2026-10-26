# Ɖa ce

> « Là où les tresses racontent. »

Plateforme web culturelle et éditoriale dédiée aux coiffures africaines : leurs origines, leurs significations, leurs techniques et les histoires qu'elles transmettent.

Chaque information culturelle ou historique est replacée dans son contexte (pays, région, communauté, époque) et accompagnée de ses sources.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) pour les animations
- Polices : Fraunces (titres) et Montserrat (textes), via `next/font`

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Organisation du code

```
src/
├── app/          les pages (1 dossier = 1 URL) + layout commun
├── components/   les briques réutilisables
│   ├── layout/   Navbar, MobileMenu, Footer
│   ├── ui/       Logo, Button, Icons, BraidLine
│   ├── home/     sections de l'accueil (Hero…)
│   └── motion/   animations (Reveal)
└── lib/          réglages du site, polices
```

Les couleurs de la marque sont définies une seule fois dans `src/app/globals.css` (cacao, crème, beige, encre, terracotta, ocre, olive).

## Avancement

- [x] Phase 1 : design system, Navbar, Hero, Footer
- [ ] Phase 2 : accueil complet
- [ ] Phase 3 : composants réutilisables
- [ ] Phase 4 : données des coiffures
- [ ] Phase 5 : page Explorer
- [ ] Phase 6 : recherche et filtres
- [ ] Phase 7 : pages détail
- [ ] Phase 8 : histoires
- [ ] Phase 9 : carte interactive
- [ ] Phase 10 : responsive, accessibilité, SEO, performance

## Images

Les photos de moodboard utilisées pendant le développement ne sont pas publiées dans ce dépôt (droits non vérifiés). Toute image mise en ligne doit avoir un crédit et une autorisation.
