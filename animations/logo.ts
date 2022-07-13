export const logoR = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    x: -30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    x: -10,
    scale: 1.1,
  },
};
export const logoU = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    y: -30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -10,
    scale: 1.1,
  },
};
export const name = {
  hidden: {
    scale: 0.6,
    opacity: 0,
    y: 30,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const logo = {
  hover: {
    scale: 1.1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  tap: {
    scale: 0.9,
  },
};
