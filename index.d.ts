import maps, { ColorMap, MapKey } from './maps';
import { RGBA } from './util';
export type Palette = string[] | RGBA[] | number[];
export type ColorMapInput = MapKey | ColorMap;
export type PaletteFormat = 'float' | 'rgba' | 'cssHex' | 'cssRGBA' | 'number';
type CreatePaletteOptions = {
    map?: ColorMapInput;
    steps?: number;
    format?: PaletteFormat;
};
/**
 * Generate a palette from a given color map.
 * @param {ColorMapInput} options.map The name of the colormap to use, or a custom map.
 * @param {number} options.steps The number of steps to include in the palette.
 * @param {PaletteFormat} options.format The format of the palette colors.
 * @returns {Palette} The generated palette.
 */
export declare const createPalette: ({ map, steps, format }?: CreatePaletteOptions) => Palette;
/**
 * Convert RGBA tuple to specified color format
 * @param {RGBA} rgba rgba tuple to convert
 * @param {PaletteFormat} format format to convert to
 * @returns {string | RGBA | number} the converted color
 */
export declare const convertRGBA: (rgba: RGBA, format: PaletteFormat) => string | RGBA | number;
export { maps as maps };
export default createPalette;
