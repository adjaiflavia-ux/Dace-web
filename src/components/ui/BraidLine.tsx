// Motif graphique « tresse » : deux fils qui s'entrecroisent.
// Purement décoratif (aria-hidden), il s'étire sur toute la largeur disponible.

type BraidLineProps = {
  className?: string;
};

export default function BraidLine({ className }: BraidLineProps) {
  return (
    <svg
      viewBox="0 0 240 16"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path d="M0 8 C 15 0, 25 0, 40 8 S 65 16, 80 8 S 105 0, 120 8 S 145 16, 160 8 S 185 0, 200 8 S 225 16, 240 8" vectorEffect="non-scaling-stroke" />
      <path d="M0 8 C 15 16, 25 16, 40 8 S 65 0, 80 8 S 105 16, 120 8 S 145 0, 160 8 S 185 16, 200 8 S 225 0, 240 8" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
