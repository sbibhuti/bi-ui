import { CARD_COLORS, CARD_VARIANTS, LAYERS, MOTION } from "./bg_config";
import { ICONS, LABELS } from "./bg_data";
import {
  pickRandom,
  poissonDiskSampling,
  random,
  randomDirection,
  randomVariant,
} from "./bg_helper";
import type {
  FloatingCardData,
  Layer,
} from "../component/background/background.types";

export function generateCards(
  width: number,
  height: number,
): FloatingCardData[] {
  const cards: FloatingCardData[] = [];

  let id = 0;

  (Object.keys(LAYERS) as Layer[]).forEach((layer) => {
    const config = LAYERS[layer];

    const points = poissonDiskSampling(
      width,
      height,
      layer === "back" ? 70 : 110,
    );

    for (let i = 0; i < Math.min(config.count, points.length); i++) {
      const point = points[i];
      const variant = randomVariant(i);
      const variantConfig = CARD_VARIANTS[variant];

      cards.push({
        id: id++,
        variant,
        label: pickRandom(LABELS),
        icon: pickRandom(ICONS),
        layer,
        direction: randomDirection(),
        x: point.x,
        y: point.y,
        width: variantConfig.width,
        height: variantConfig.height,
        speed: random(config.speed[0], config.speed[1]),
        bounceHeight: random(MOTION.bounceHeight[0], MOTION.bounceHeight[1]),
        bounceDuration: random(
          MOTION.bounceDuration[0],
          MOTION.bounceDuration[1],
        ),
        rotation: random(MOTION.rotation[0], MOTION.rotation[1]),
        color: pickRandom(CARD_COLORS),
        opacity: random(config.opacity[0], config.opacity[1]),
        blur: config.blur,
        zIndex: config.zIndex,
      });
    }
  });

  return cards;
}
