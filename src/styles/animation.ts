export const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export const iconVars = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export const mobileLinkVars = {
  initial: {
    y: "50vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
