import { useEffect } from "react";
import { useAnimationFrame, useMotionValue } from "framer-motion";

import { WRAP_PADDING, WAVE } from "../utils/bg_config";
import type { Direction } from "../component/background/background.types";

interface FloatingMotionOptions {
  initialX: number;
  initialY: number;
  direction: Direction;
  speed: number;
  width: number | string;
  rotation: number;
}

export function useFloatingMotion({
  initialX,
  initialY,
  direction,
  speed,
  width,
  rotation,
}: FloatingMotionOptions) {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const rotate = useMotionValue(rotation);
  const viewportWidth = useMotionValue(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      viewportWidth.set(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth]);

  useAnimationFrame((time, delta) => {
    const dt = delta / 1000;
    let nextX = x.get() + speed * direction * dt;
    const limit = viewportWidth.get();

    if (direction === 1) {
      if (nextX > limit + WRAP_PADDING) {
        nextX = -width;
      }
    } else {
      if (nextX < -width - WRAP_PADDING) {
        nextX = limit + WRAP_PADDING;
      }
    }

    x.set(nextX);
    const wave = Math.sin(time * WAVE.frequency + initialY) * WAVE.amplitude;
    y.set(initialY + wave);
    rotate.set(rotation + Math.sin(time * 0.00025 + initialX) * 2);
  });

  return {
    x,
    y,
    rotate,
  };
}
