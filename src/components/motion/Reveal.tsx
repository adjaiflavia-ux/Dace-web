"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  // "load" : s'anime dès l'arrivée sur la page (ex. Hero)
  // "scroll" : s'anime quand l'élément apparaît à l'écran
  trigger?: "load" | "scroll";
};

// Apparition douce : léger fondu + petite montée. Une seule fois, jamais en boucle.
export default function Reveal({ children, delay = 0, className, trigger = "scroll" }: RevealProps) {
  const visible = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={trigger === "load" ? visible : undefined}
      whileInView={trigger === "scroll" ? visible : undefined}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
