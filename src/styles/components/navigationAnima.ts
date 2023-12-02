//animation for first hamburger element
export const hamburgerVariantsFirstChild = {
  initial: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
  collapse: {
    rotate: 45,
    y: 9,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};
//animation for second hamburger element
export const hamburgerVariantsSecondChild = {
  initial: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapse: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
//animation for last hamburger element
export const hamburgerVariantsLastChild = {
  initial: {
    rotate: 0,
    y: 0,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
  collapse: {
    rotate: -45,
    y: -9,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

export const UlVariants = {
  initial: {
    right: "0vw",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  collapse: {
    right: "-68vw",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};
/* This configuration sets up animations for each part of the hamburger menu. The initial state defines the starting position, and the collapse state defines the position when the menu is collapsed. The transition property specifies the duration and easing function for each animation, providing a smooth and visually appealing menu transition. */
