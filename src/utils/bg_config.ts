import type {
  CardColor,
  Layer,
  LayerConfig,
} from "../component/background/background.types";

/**
 * Layer configuration
 * Higher layers move faster, are brighter, and appear above the others.
 */
export const LAYERS: Record<Layer, LayerConfig> = {
  back: {
    count: 120,
    speed: [8, 16],
    width: [90, 120],
    opacity: [0.05, 0.09],
    blur: 2,
    zIndex: 1,
  },

  front: {
    count: 150,
    speed: [4, 24],
    width: [150, 190],
    opacity: [0.18, 0.3],
    blur: 0,
    zIndex: 3,
  },
};

/**
 * Neon color palette
 */
export const CARD_COLORS: CardColor[] = [
  {
    text: "text-on-surface",
    border: "border-surface",
    glow: "rgba(34,211,238,.45)",
    bg: "bg-surface-container",
  },

  {
    text: "text-on-primary",
    border: "border-primary",
    glow: "rgba(59,130,246,.45)",
    bg: "bg-primary-container",
  },

  {
    text: "text-on-secondary",
    border: "border-secondary",
    glow: "rgba(139,92,246,.45)",
    bg: "bg-secondary-container",
  },

  {
    text: "text-on-accent",
    border: "border-accent",
    glow: "rgba(236,72,153,.45)",
    bg: "bg-accent-container",
  },

  {
    text: "text-on-tertiary",
    border: "border-tertiary",
    glow: "rgba(245,158,11,.45)",
    bg: "bg-tertiary-container",
  },
];

/**
 * Animation constants
 */
export const MOTION = {
  bounceHeight: [8, 22],
  bounceDuration: [2.5, 5],
  rotation: [-3, 3],
  scale: [0.98, 1.03],
  parallaxStrength: 12,
};
export const PARTICLES = {
  count: 220,
  size: [1.5, 8],
  opacity: [0.08, 0.35],
  duration: [8, 20],
};

/**
 * Motion streaks
 */
export const STREAKS = {
  count: 18,
  width: [180, 520],
  opacity: [0.03, 0.08],
  duration: [25, 60],
};

/**
 * Screen padding before wrapping
 */
export const WRAP_PADDING = 220;

/**
 * Vertical sine wave movement
 */
export const WAVE = {
  amplitude: 8,
  frequency: 0.0015,
};

export const CARD_VARIANTS = {
  compact: {
    width: 44,
    height: 44,
  },
  medium: {
    width: "100%",
    height: 62,
  },
} as const;
