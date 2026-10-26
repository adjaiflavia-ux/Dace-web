import { Fraunces, Montserrat } from "next/font/google";

// Police des grands titres : éditoriale, aux formes douces.
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Police des textes : moderne et très lisible (celle de la planche de marque).
export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});
