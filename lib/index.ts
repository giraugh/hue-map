import maps, { ColorMap, MapKey } from './maps'
import { hexColorToRGBA, lerpRGBA, RGBA } from './util'

export type Palette = string[] | RGBA[] | number[]
export type ColorMapInput = MapKey | ColorMap
export type PaletteFormat = 'float' | 'rgba' | 'cssHex' | 'cssRGBA' | 'number'
type CreatePaletteOptions = {
  map?: ColorMapInput,
  steps?: number,
  format?: PaletteFormat
}

/**
 * Generate a palette from a given color map.
 * @param {ColorMapInput} options.map The name of the colormap to use, or a custom map.
 * @param {number} options.steps The number of steps to include in the palette. Must be greater than or equal to number of points in color map.
 * @param {PaletteFormat} options.format The format of the palette colors.
 * @returns {Palette} The generated palette.
 */
export const createPalette = ({ map = 'viridis', steps = 10, format = 'cssHex' }: CreatePaletteOptions = {}): Palette => {
  // If passed a map name, index from built-in color maps
  const colorMap: ColorMap = typeof map === 'string' ? maps[map] : map

  // Map colour points from 0..1 to steps array
  const colorPoints = colorMap.map(([index, color]) => ({
    index: Math.round(index * (steps-1)),
    color: typeof color === 'number' ? hexColorToRGBA(color) : color,
  })).filter(({ index }, i, all) => {
    if (index === steps-1) return all.filter((p, j) => p.index === index && j > i).length < 1
    return all.findIndex(p => p.index === index) === i
  })

  // Create colors
  const colorsRGBA = colorPoints
    .flatMap((_, i) => {
      // If this is the last point in the array, just return it
      if (i === colorPoints.length-1) return [colorPoints[i].color]

      // Compare this point to the next point
      //  - how far is it (in steps)
      //  - how does the colour change
      const numSteps: number = colorPoints[i+1].index - colorPoints[i].index
      const fromColor = colorPoints[i].color
      const toColor = colorPoints[i+1].color

      // Generate an amount of steps proportional to the index distance
      return Array.from({ length: numSteps }, (_, j) => lerpRGBA(fromColor, toColor, j / numSteps))
    })

  // Convert to desired format
  const colors = colorsRGBA.map(rgba => convertRGBA(rgba, format)) as Palette
  return colors
}

/**
 * Convert RGBA tuple to specified color format
 * @param {RGBA} rgba rgba tuple to convert
 * @param {PaletteFormat} format format to convert to
 * @returns {string | RGBA | number} the converted color
 */
export const convertRGBA = (rgba: RGBA, format: PaletteFormat): string | RGBA | number => {
  if (format === 'float')
    return rgba.map(x => x / 255) as RGBA
  if (format === 'cssHex')
    return `#${rgba.map(x => x.toString(16).padStart(2, '0')).join('')}`.toUpperCase()
  if (format === 'cssRGBA')
    return `rgba(${rgba.join(', ')})`
  if (format === 'rgba')
    return rgba
  if (format === 'number')
    return parseInt(rgba.map(x => x.toString(16).padStart(2, '0')).join(''), 16)
  throw new Error(`Unknown color format: "${format}"`)
}

export { maps as maps }
export default createPalette
