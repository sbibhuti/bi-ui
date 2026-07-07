import type { CardVariant, Direction } from "../component/background/background.types";
/**
 * Random number between min & max
 */
export declare function random(min: number, max: number): number;
/**
 * Random integer
 */
export declare function randomInt(min: number, max: number): number;
/**
 * Pick a random item
 */
export declare function pickRandom<T>(items: readonly T[]): T;
/**
 * Random direction
 */
export declare function randomDirection(): Direction;
/**
 * Clamp value
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Linear interpolation
 */
export declare function lerp(start: number, end: number, t: number): number;
/**
 * Wrap value around boundaries
 */
export declare function wrap(value: number, min: number, max: number): number;
export interface Point {
    x: number;
    y: number;
}
/**
 * Generates evenly distributed random points.
 * Much better than Math.random() because cards won't overlap heavily.
 */
export declare function poissonDiskSampling(width: number, height: number, minDistance: number, maxAttempts?: number): Point[];
export declare function randomVariant(i: number): CardVariant;
export declare function chance(probability: number): boolean;
