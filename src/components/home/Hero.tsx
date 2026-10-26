import Image from "next/image";
import Button from "@/components/ui/Button";
import BraidLine from "@/components/ui/BraidLine";
import Reveal from "@/components/motion/Reveal";
import heroImage from "../../../public/images/hero/hero-tresses.jpg";

// Hero de l'accueil : grande photo plein écran, texte en bas à gauche.
// Le sujet de la photo est à droite, on garde donc la gauche pour le texte.
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] h-svh max-h-[1100px] items-end overflow-hidden bg-encre text-creme">
      {/* Photo de fond */}
      <Image
        src={heroImage}
        alt="Femme vue de dos, coiffée de nattes collées remontées en chignon et ornées de bagues dorées, dans une lumière chaude de fin de journée."
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] md:object-center"
      />

      {/* Voiles sombres pour garder le texte lisible :
          par le bas sur mobile, par la gauche sur grand écran */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-encre via-encre/55 to-encre/10 md:bg-gradient-to-r md:from-encre/90 md:via-encre/45 md:to-transparent"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20 lg:pb-24">
        <Reveal trigger="load" delay={0.1}>
          <p className="flex items-center gap-4 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ocre md:text-[0.7rem] md:tracking-[0.28em]">
            <BraidLine className="h-3 w-14 text-ocre" />
            Coiffures africaines · Histoires · Territoires
          </p>
        </Reveal>

        <Reveal trigger="load" delay={0.25}>
          <h1 className="font-display mt-6 max-w-[12ch] text-[clamp(3.25rem,10vw,9.5rem)] font-light leading-[0.88] tracking-[-0.02em]">
            Là où les <em className="font-normal italic text-ocre">tresses</em> racontent.
          </h1>
        </Reveal>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <Reveal trigger="load" delay={0.45} className="max-w-md">
            <p className="text-base leading-relaxed text-creme/85 md:text-lg">
              Des gestes transmis, des symboles, des territoires et des histoires. Ɖa ce explore
              les coiffures africaines à travers ce qu’elles racontent de nos cultures, de nos
              identités et de nos héritages.
            </p>
          </Reveal>

          <Reveal trigger="load" delay={0.6}>
            <Button href="/explorer" variant="creme">
              Explorer les coiffures
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Légende verticale, façon magazine (masquée sur mobile) */}
      <p className="absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-180 text-[0.65rem] uppercase tracking-[0.3em] text-creme/60 [writing-mode:vertical-rl] md:block lg:right-6">
        N° 01 — Archive vivante
      </p>
    </section>
  );
}
