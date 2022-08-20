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
      .toStrictEqual(['#440154FF','#472C7AFF','#413F83FF','#3B518BFF','#2C718EFF','#21908DFF','#27AD81FF','#42BB72FF','#5CC863FF','#AADC32FF'])
  })

  it('creates the correct number of color steps', () => {
    expect(createPalette({ steps: 1 })).toHaveLength(1)
    expect(createPalette({ steps: 50 })).toHaveLength(50)
    expect(createPalette({ steps: 100 })).toHaveLength(100)
  })

  it('creates the correct palette', () => {
    expect(createPalette({ map: 'jet', steps: 5 }))
      .toStrictEqual(['#000083FF','#003CAAFF','#05FFFFFF','#FFFF00FF','#FA0000FF'])
  })

  it('correctly interpolates alpha', () => {
    expect(createPalette({ map: 'alpha', steps: 5 }))
      .toStrictEqual(['#FFFFFF00','#FFFFFF33','#FFFFFF66','#FFFFFF99','#FFFFFFCC'])
  })

  it('returns the correct color format', () => {
    expect(createPalette({ map: 'plasma', steps: 5, format: 'number' }))
      .toStrictEqual([0x0D0887FF,0x7D03A8FF,0xA82296FF,0xE56B5DFF,0xFDC328FF])
  })
})
