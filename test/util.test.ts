import { expect, describe, it } from 'vitest'
import { lerp, lerpRGBA, hexColorToRGBA } from '../lib/util'

describe('lerp', () => {
  it('returns the correct result', () => {
    expect(lerp(10, 20, .5)).toBe(15)
    expect(lerp(0, 1, .5)).toBe(.5)
    expect(lerp(-10, 0, .5)).toBe(-5)
    expect(lerp(0, .5, Math.PI)).toBe(Math.PI/2)
    expect(lerp(0, 255, 0)).toBe(0)
    expect(lerp(0, 255, 1)).toBe(255)
  })
})

describe('lerpRGBA', () => {
  it('returns the correct result', () => {
    expect(lerpRGBA([255,0,0,255], [0,0,255,255], .5)).toStrictEqual([128,0,128,255])
    expect(lerpRGBA([0,0,0,0], [0,0,0,255], .2)).toStrictEqual([0,0,0,51])
    expect(lerpRGBA([247,158,0,255], [44,159,244,255], .7)).toStrictEqual([105,159,171,255])
  })
})

describe('hexColorToRGBA', () => {
  it('returns the correct result', () => {
    expect(hexColorToRGBA(0xF79E00FF)).toStrictEqual([247,158,0,255])
    expect(hexColorToRGBA(0x00000000)).toStrictEqual([0,0,0,0])
    expect(hexColorToRGBA(0xFFFFFFFF)).toStrictEqual([255,255,255,255])
    expect(hexColorToRGBA(0xFFFFFF00)).toStrictEqual([255,255,255,0])
  })
})
