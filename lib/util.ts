export type RGBA = [number, number, number, number]
export type RGBAFloat = [number, number, number, number]

export const lerp = (a: number, b: number, t: number): number =>
  a + (b-a) * t

export const lerpRGBA = (rgba1: RGBA, rgba2: RGBA, t: number): RGBA => [
  Math.round(lerp(rgba1[0], rgba2[0], t)),
  Math.round(lerp(rgba1[1], rgba2[1], t)),
  Math.round(lerp(rgba1[2], rgba2[2], t)),
  Math.round(lerp(rgba1[3], rgba2[3], t)),
]

export const hexColorToRGBA = (hex: number): RGBA => {
  const hexString = hex.toString(16).padStart(8, '0')
  return Array.from({ length: 4 }, (_, i) =>
    Number(`0x${hexString.slice(2 * i, 2 * (i + 1))}`)
  ) as RGBA
}
