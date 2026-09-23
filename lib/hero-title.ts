/**
 * Gives data-driven hero titles a size tier based on their real copy length.
 * CSS still handles viewport scaling; this only prevents unusually long
 * headings from competing with the protected overlay space.
 */
export function heroTitleClass(title: string) {
  if (title.length > 42) return "hero-title hero-title--extra-long";
  if (title.length > 34) return "hero-title hero-title--long";
  return "hero-title";
}
