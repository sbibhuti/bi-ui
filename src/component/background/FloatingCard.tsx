import { memo } from "react";
import { motion } from "framer-motion";

import type { FloatingCardData } from "./background.types";
import { useFloatingMotion } from "../../hooks/useFloatingMotion";

interface FloatingCardProps {
    card: FloatingCardData;
}

function FloatingCardComponent({
    card,
}: FloatingCardProps) {
    const {
        x,
        y,
        rotate,
    } = useFloatingMotion({
        initialX: card.x,
        initialY: card.y,
        direction: card.direction,
        speed: card.speed,
        width: card.width,
        rotation: card.rotation,
    });

    const Icon = card.icon;

    return (
        <motion.div
            style={{
                x,
                y,
                rotate,
                position: "absolute",
                zIndex: card.zIndex,
                opacity: card.opacity,
                filter: `blur(${card.blur}px)`,
                willChange: "transform",
            }}
            animate={{
                scale: [1, 1.03, 1],
            }}
            transition={{
                duration: card.bounceDuration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="pointer-events-none select-none"
        >
            {card.variant === "compact" ? (
                <motion.div
                    className="relative"
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ rotateX: 0, rotateY: 0, opacity: 0 }}
                    animate={{ rotateX: 15, rotateY: -20, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <Icon
                        height={40}
                        width={40}
                        className={card.color.text}
                    />
                </motion.div>
            ) : (
                <motion.div
                    className={`flex items-center justify-center border rounded-md px-2 py-1 overflow-hidden relative ${card.color.bg} ${card.color.border}`}
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ rotateX: 0, rotateY: 0, opacity: 0 }}
                    animate={{ rotateX: 15, rotateY: 20, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <div className="relative flex items-center">
                        <span className={`font-mono text-sm font-semibold tracking-wide ${card.color.text}`}>
                            {card.label}
                        </span>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

export const FloatingCard = memo(FloatingCardComponent);
