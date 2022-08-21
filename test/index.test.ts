import { expect, it, describe } from 'vitest'
import defaultExport, { createPalette, convertRGBA, maps } from '../lib'
import mapsFromFile from '../lib/maps'

describe('exports', () => {
  it('has correct maps export', () => expect(mapsFromFile).toBe(maps))
  it('has correct default export', () => expect(defaultExport).toBe(createPalette))
})

describe('convertRGBA', () => {
  it('converts to cssHex correctly', () => expect(convertRGBA([247,158,0,255], 'cssHex')).toStrictEqual('#F79E00FF'))
  it('converts to cssRGBA correctyl', () => expect(convertRGBA([247,158,0,255], 'cssRGBA')).toStrictEqual('rgba(247, 158, 0, 255)'))
  it('converts to float correctly', () => expect(convertRGBA([247,158,0,255], 'float')).toStrictEqual([0.9686274509803922,0.6196078431372549,0,1]))
  it('converts to rgba correctly', () => expect(convertRGBA([247,158,0,255], 'rgba')).toStrictEqual([247,158,0,255]))
  it('converts to number correctly', () => expect(convertRGBA([247,158,0,255], 'number')).toStrictEqual(0xF79E00FF))

  it('throws an exception for unknown formats', () => {
    // @ts-ignore
    expect(() => convertRGBA([0, 0, 0, 0], '')).toThrow()
  })
})

describe('createPalette', () => {
  it('creates the correct palette using default arguments', () => {
    expect(createPalette())
      .toStrictEqual(['#440154FF','#472C7AFF','#3B518BFF','#2C718EFF','#27818EFF','#21908DFF','#27AD81FF','#5CC863FF','#AADC32FF','#FDE725FF'])
  })

  it('creates the correct number of color steps', () => {
    expect(createPalette({ steps: 1 })).toHaveLength(1)
    expect(createPalette({ steps: 50 })).toHaveLength(50)
    expect(createPalette({ steps: 100 })).toHaveLength(100)
  })

  it('creates the correct palette', () => {
    expect(createPalette({ map: 'jet', steps: 5 }))
      .toStrictEqual(['#000083FF','#003CAAFF','#05FFFFFF','#FFFF00FF','#800000FF'])
  })

  it('correctly interpolates alpha', () => {
    expect(createPalette({ map: 'alpha', steps: 5 }))
      .toStrictEqual(['#FFFFFF00','#FFFFFF40','#FFFFFF80','#FFFFFFBF','#FFFFFFFF'])
  })

  it('returns the correct color format', () => {
    expect(createPalette({ map: 'plasma', steps: 5, format: 'number' }))
      .toStrictEqual([0x0D0887FF,0x7D03A8FF,0xCB4679FF,0xF89441FF,0xF0F921FF])
  })

  it('supports custom color maps', () => {
    expect(createPalette({
      map: [[0, 0xFEAC5EFF],[0.5, 0xC779D0FF],[1, 0x4BC0C8FF]],
      steps: 5,
      format: 'number',
    })).toStrictEqual([0xFEAC5EFF,0xE39397FF,0xC779D0FF,0x899DCCFF,0x4BC0C8FF])

    expect(createPalette({
      map: [[0, [38, 83, 43, 255]],[0.25, [57, 158, 90, 255]],[0.5, [90, 188, 185, 255]],[0.75, [99, 226, 198, 255]],[1, [110, 249, 245, 255]]],
      steps: 5,
      format: 'number',
    })).toStrictEqual([0x26532BFF,0x399E5AFF,0x5ABCB9FF,0x63E2C6FF,0x6EF9F5FF])
  })
})
