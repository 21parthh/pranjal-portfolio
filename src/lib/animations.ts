import { Variants } from "framer-motion";

export const fadeInUp = (delay: number = 0): Variants => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 0.6,
                  delay: delay,
                  ease: [0.22, 1, 0.36, 1],
            },
      },
});

export const staggerContainer = (
      staggerChildren: number = 0.1,
      delayChildren: number = 0
): Variants => ({
      hidden: {},
      visible: {
            transition: {
                  staggerChildren,
                  delayChildren,
            },
      },
});

export const imageReveal: Variants = {
      hidden: { scale: 1.2 }, // Removed opacity to prevent blinking
      visible: {
            scale: 1,
            transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
            },
      },
};

export const textReveal: Variants = {
      hidden: { y: 100, opacity: 0 },
      visible: {
            y: 0,
            opacity: 1,
            transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
            },
      },
};
