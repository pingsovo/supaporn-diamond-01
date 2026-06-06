import type { Transition, Variants } from "framer-motion";

export const LUX_SPRING: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { ...LUX_SPRING } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const viewportOnce = { once: true, margin: "-12% 0px" } as const;
