import type { FloatingCardData } from "./background.types";
interface FloatingCardProps {
    card: FloatingCardData;
}
declare function FloatingCardComponent({ card, }: FloatingCardProps): import("react").JSX.Element;
export declare const FloatingCard: import("react").MemoExoticComponent<typeof FloatingCardComponent>;
export {};
