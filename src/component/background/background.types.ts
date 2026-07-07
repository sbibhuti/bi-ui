import type { SVGProps } from "react";

export type Layer = "back" | "front";

export type Direction = 1 | -1;

export type CardVariant = "compact" | "medium";

export interface LayerConfig {
  count: number;
  speed: [number, number];
  width: [number, number];
  opacity: [number, number];
  blur: number;
  zIndex: number;
}

export interface CardColor {
  text: string;
  border: string;
  glow: string;
  bg: string;
}

export interface FloatingCardData {
  id: number;
  variant: CardVariant;
  label: string;
  subtitle?: string;
  codeLine?: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  layer: Layer;
  direction: Direction;
  x: number;
  y: number;
  speed: number;
  width: number | string;
  height: number;
  bounceHeight: number;
  bounceDuration: number;
  rotation: number;
  color: CardColor;
  opacity: number;
  blur: number;
  zIndex: number;
}

export interface ParticleData {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}
