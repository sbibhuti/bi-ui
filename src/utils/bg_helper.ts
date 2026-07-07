import type {
  CardVariant,
  Direction,
} from "../component/background/background.types";

/**
 * Random number between min & max
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Random integer
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(random(min, max + 1));
}

/**
 * Pick a random item
 */
export function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Random direction
 */
export function randomDirection(): Direction {
  return Math.random() > 0.5 ? 1 : -1;
}

/**
 * Clamp value
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

/**
 * Wrap value around boundaries
 */
export function wrap(value: number, min: number, max: number): number {
  const range = max - min;

  if (value < min) {
    return max - ((min - value) % range);
  }

  if (value > max) {
    return min + ((value - max) % range);
  }

  return value;
}

/**
 * Distance squared
 */
function distanceSquared(x1: number, y1: number, x2: number, y2: number) {
  const dx = x1 - x2;
  const dy = y1 - y2;

  return dx * dx + dy * dy;
}

export interface Point {
  x: number;
  y: number;
}

/**
 * Generates evenly distributed random points.
 * Much better than Math.random() because cards won't overlap heavily.
 */
export function poissonDiskSampling(
  width: number,
  height: number,
  minDistance: number,
  maxAttempts = 30,
): Point[] {
  const cellSize = minDistance / Math.sqrt(2);
  const gridWidth = Math.ceil(width / cellSize);
  const gridHeight = Math.ceil(height / cellSize);
  const grid: (Point | null)[] = new Array(gridWidth * gridHeight).fill(null);
  const active: Point[] = [];
  const points: Point[] = [];
  const first: Point = {
    x: random(0, width),
    y: random(0, height),
  };

  points.push(first);
  active.push(first);

  grid[
    Math.floor(first.x / cellSize) + Math.floor(first.y / cellSize) * gridWidth
  ] = first;

  while (active.length) {
    const index = randomInt(0, active.length - 1);
    const point = active[index];
    let found = false;

    for (let i = 0; i < maxAttempts; i++) {
      const angle = random(0, Math.PI * 2);
      const radius = random(minDistance, minDistance * 2);
      const sample = {
        x: point.x + Math.cos(angle) * radius,
        y: point.y + Math.sin(angle) * radius,
      };

      if (
        sample.x < 0 ||
        sample.x >= width ||
        sample.y < 0 ||
        sample.y >= height
      ) {
        continue;
      }

      const gx = Math.floor(sample.x / cellSize);
      const gy = Math.floor(sample.y / cellSize);
      let valid = true;

      for (
        let y = Math.max(0, gy - 2);
        y <= Math.min(gridHeight - 1, gy + 2);
        y++
      ) {
        for (
          let x = Math.max(0, gx - 2);
          x <= Math.min(gridWidth - 1, gx + 2);
          x++
        ) {
          const neighbor = grid[x + y * gridWidth];

          if (
            neighbor &&
            distanceSquared(sample.x, sample.y, neighbor.x, neighbor.y) <
              minDistance * minDistance
          ) {
            valid = false;
            break;
          }
        }

        if (!valid) break;
      }

      if (valid) {
        points.push(sample);
        active.push(sample);
        grid[gx + gy * gridWidth] = sample;
        found = true;
        break;
      }
    }

    if (!found) {
      active.splice(index, 1);
    }
  }

  return points;
}

export function randomVariant(i: number): CardVariant {
  if (i !== 0 && i % 2 !== 0) return "compact";

  return "medium";
}

export function chance(probability: number) {
  return Math.random() < probability;
}
