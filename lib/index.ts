import maps from './maps'
import { hexColourToRGBA, lerpRGBA, RGBA } from './util'

type Palette = string[] | RGBA[]
type PaletteFormat = 'float' | 'rgba' | 'cssHex' | 'cssRGBA'
type CreatePalleteOptions = {
  map: keyof typeof maps,
  shades?: number,
  format?: PaletteFormat
}

/**
 * Generate a palette from a given color map
 * @param {PaletteFormat} options.map the name of the colormap to use
 * @param {number} options.shades the number of shades to include in the palette. Must be >= number of points in color map.
 * @param {PaletteFormat} options.format the format of the palette colors.
 * @returns {Palette} the generated palette
 */
const createPalette = ({ map = 'viridis', shades = 10, format = 'cssHex' }: CreatePalleteOptions): Palette => {
  // Get map using key
  const colorMap = maps[map]

  // Map colour points from 0..1 to shades array
  const colorPoints = colorMap.map(([index, hexColor]) => ({ index: Math.round(index * shades), color: hexColourToRGBA(hexColor) } ))

  console.log(colorMap[0], colorPoints[0])


  // Create colors
  const colorsRGBA = colorPoints
    .filter((_, i) => i < colorPoints.length - 1)
    .flatMap((_, i) => {
      // Compare this point to the next point
      //  - how far is it (in shades)
      //  - how does the colour change
      const numSteps = colorPoints[i+1].index - colorPoints[i].index
      const fromColor = colorPoints[i].color
      const toColor = colorPoints[i+1].color

      // Generate an amount of shades proportional to the index distance
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
 * @returns {string | RGBA} the converted color
 */
export const convertRGBA = (rgba: RGBA, format: PaletteFormat): string | RGBA => {
  if (format === 'float')
    return rgba.map(x => x / 255) as RGBA
  if (format === 'cssHex')
    return `#${rgba.map(x => x.toString(16).padStart(2, '0')).join('')}`
  if (format === 'cssRGBA')
    return `rgba(${rgba.join(', ')})`
  if (format === 'rgba')
    return rgba
  throw new Error(`Unknown color format: "${format}"`)
}

export { maps as maps }
export default createPalette
