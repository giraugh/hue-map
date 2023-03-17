import maps, { ColorMap, MapKey } from './maps';
import { RGBA, RGBAFloat } from './util';
export type ColorMapInput = MapKey | ColorMap;
export type PaletteFormat = 'float' | 'rgba' | 'cssHex' | 'cssRGBA' | 'number';
type CreatePaletteOptions = {
    map?: ColorMapInput;
    steps?: number;
};
declare class Palette {
    private readonly colors;
    constructor(colors: RGBA[]);
    /** Convert this palette into a specified format */
    format(_format: 'cssRGBA'): string[];
    format(_format: 'number'): number[];
    format(_format: 'float'): RGBAFloat[];
    format(_format: 'rgba'): RGBA[];
    format(_format?: 'cssHex'): string[];
    /** Get the number of colors in this palette */
    get length(): number;
}
/**
 * Generate a palette from a given color map.
 * @param {ColorMapInput} options.map The name of the colormap to use, or a custom map.
 * @param {number} options.steps The number of steps to include in the palette.
 * @param {PaletteFormat} options.format The format of the palette colors.
 * @returns {Palette} The generated palette.
 */
export declare const createPalette: ({ map, steps }?: CreatePaletteOptions) => Palette;
/**
 * Convert RGBA tuple to specified color format
 * @param {RGBA} rgba rgba tuple to convert
 * @param {PaletteFormat} format format to convert to
 * @returns {string | RGBA | number} the converted color
 */
export declare const convertRGBA: (rgba: RGBA, format: PaletteFormat) => string | RGBA | number;
export { maps as maps };
export default createPalette;
