import type { Direction } from "../component/background/background.types";
interface FloatingMotionOptions {
    initialX: number;
    initialY: number;
    direction: Direction;
    speed: number;
    width: number | string;
    rotation: number;
}
export declare function useFloatingMotion({ initialX, initialY, direction, speed, width, rotation, }: FloatingMotionOptions): {
    x: import("motion-dom").MotionValue<number>;
    y: import("motion-dom").MotionValue<number>;
    rotate: import("motion-dom").MotionValue<number>;
};
export {};
