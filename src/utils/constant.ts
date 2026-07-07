export const COLORS = [
  {
    text: "#7dd3fc",
    border: "#38bdf8",
    glow: "rgba(56,189,248,.45)",
  },
  {
    text: "#93c5fd",
    border: "#3b82f6",
    glow: "rgba(59,130,246,.45)",
  },
  {
    text: "#c4b5fd",
    border: "#8b5cf6",
    glow: "rgba(139,92,246,.45)",
  },
  {
    text: "#f9a8d4",
    border: "#ec4899",
    glow: "rgba(236,72,153,.45)",
  },
];

export const LAYERS = {
  back: {
    count: 120,
    speed: [8, 18],
    size: [90, 120],
    opacity: [0.05, 0.1],
    blur: 2,
  },

  middle: {
    count: 80,
    speed: [18, 32],
    size: [110, 150],
    opacity: [0.1, 0.18],
    blur: 1,
  },

  front: {
    count: 45,
    speed: [30, 48],
    size: [130, 180],
    opacity: [0.2, 0.32],
    blur: 0,
  },
} as const;
