import type { CardColor, Layer, LayerConfig } from "../component/background/background.types";
/**
 * Layer configuration
 * Higher layers move faster, are brighter, and appear above the others.
 */
export declare const LAYERS: Record<Layer, LayerConfig>;
/**
 * Neon color palette
 */
export declare const CARD_COLORS: CardColor[];
/**
 * Animation constants
 */
export declare const MOTION: {
    bounceHeight: number[];
    bounceDuration: number[];
    rotation: number[];
    scale: number[];
    parallaxStrength: number;
};
export declare const PARTICLES: {
    count: number;
    size: number[];
    opacity: number[];
    duration: number[];
};
/**
 * Motion streaks
 */
export declare const STREAKS: {
    count: number;
    width: number[];
    opacity: number[];
    duration: number[];
};
/**
 * Screen padding before wrapping
 */
export declare const WRAP_PADDING = 220;
/**
 * Vertical sine wave movement
 */
export declare const WAVE: {
    amplitude: number;
    frequency: number;
};
export declare const CARD_VARIANTS: {
    readonly compact: {
        readonly width: 44;
        readonly height: 44;
    };
    readonly medium: {
        readonly width: "100%";
        readonly height: 62;
    };
};
