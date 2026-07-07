import { memo, useMemo } from "react";
import { motion } from "framer-motion";

import { PARTICLES } from "../../utils/bg_config";
import { random } from "../../utils/bg_helper";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    drift: number;
}

export const BackgroundParticles = memo(function BackgroundParticles() {
    const particles = useMemo<Particle[]>(() => {
        return Array.from({ length: PARTICLES.count }, (_, id) => ({
            id,
            x: random(0, window.innerWidth),
            y: random(0, window.innerHeight),
            size: random(PARTICLES.size[0], PARTICLES.size[1]),
            opacity: random(
                PARTICLES.opacity[0],
                PARTICLES.opacity[1]
            ),
            duration: random(
                PARTICLES.duration[0],
                PARTICLES.duration[1]
            ),
            delay: random(-20, 0),
            drift: random(-25, 25),
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-on-bi-background/90"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: particle.x,
                        top: particle.y,
                        opacity: particle.opacity,
                        boxShadow: `
                            0 0 8px rgb(from var(--color-on-bi-background) r g b / 45%),
                            0 0 16px rgb(from var(--color-bi-background) r g b / 35%)
                        `,
                    }}
                    animate={{
                        y: [0, -particle.drift, 0,],
                        x: [0, particle.drift * 0.4, 0,],
                        scale: [1, 1.5, 1,],
                        opacity: [
                            particle.opacity * 0.6,
                            particle.opacity,
                            particle.opacity * 0.6,
                        ],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
});