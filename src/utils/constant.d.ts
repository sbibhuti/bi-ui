export declare const COLORS: {
    text: string;
    border: string;
    glow: string;
}[];
export declare const LAYERS: {
    readonly back: {
        readonly count: 120;
        readonly speed: readonly [8, 18];
        readonly size: readonly [90, 120];
        readonly opacity: readonly [0.05, 0.1];
        readonly blur: 2;
    };
    readonly middle: {
        readonly count: 80;
        readonly speed: readonly [18, 32];
        readonly size: readonly [110, 150];
        readonly opacity: readonly [0.1, 0.18];
        readonly blur: 1;
    };
    readonly front: {
        readonly count: 45;
        readonly speed: readonly [30, 48];
        readonly size: readonly [130, 180];
        readonly opacity: readonly [0.2, 0.32];
        readonly blur: 0;
    };
};
