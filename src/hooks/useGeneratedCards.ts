import { useEffect, useMemo, useState } from "react";

import type { FloatingCardData } from "../component/background/background.types";
import { generateCards } from "../utils/generateCards";

function getViewport() {
  if (typeof window === "undefined") {
    return {
      width: 1920,
      height: 1080,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useGeneratedCards(): FloatingCardData[] {
  const [viewport, setViewport] = useState(getViewport);

  useEffect(() => {
    let frame = 0;

    const handleResize = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setViewport(getViewport());
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = useMemo(() => {
    return generateCards(viewport.width, viewport.height);
  }, [viewport.width, viewport.height]);

  return cards;
}
