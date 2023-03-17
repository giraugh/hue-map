export type RGBA = [number, number, number, number];
export type RGBAFloat = [number, number, number, number];
export declare const lerp: (a: number, b: number, t: number) => number;
export declare const lerpRGBA: (rgba1: RGBA, rgba2: RGBA, t: number) => RGBA;
export declare const hexColorToRGBA: (hex: number) => RGBA;
