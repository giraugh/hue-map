import { expect, test } from 'vitest'
import defaultExport, { createPalette, convertRGBA, maps } from '../lib'
import mapsFromFile from '../lib/maps'

test('exports', () => {
  expect(mapsFromFile).toBe(maps)
  expect(defaultExport).toBe(createPalette)
})

test('convertRGBA', () => {
  expect(convertRGBA([247,158,0,255], 'cssHex')).toStrictEqual('#F79E00FF')
  expect(convertRGBA([247,158,0,255], 'cssRGBA')).toStrictEqual('rgba(247, 158, 0, 255)')
  expect(convertRGBA([247,158,0,255], 'float')).toStrictEqual([0.9686274509803922,0.6196078431372549,0,1])
  expect(convertRGBA([247,158,0,255], 'rgba')).toStrictEqual([247,158,0,255])
  expect(convertRGBA([247,158,0,255], 'number')).toStrictEqual(0xF79E00FF)
})

test('createPalette', () => {
  expect(createPalette()).toStrictEqual(['#440154FF','#472C7AFF','#413F83FF','#3B518BFF','#2C718EFF','#21908DFF','#27AD81FF','#42BB72FF','#5CC863FF','#AADC32FF'])
  expect(createPalette({ steps: 2 })).toStrictEqual(['#472C7AFF','#27AD81FF'])
  expect(createPalette({ map: 'jet', steps: 5 })).toStrictEqual(['#000083FF','#003CAAFF','#05FFFFFF','#FFFF00FF','#FA0000FF'])
  expect(createPalette({ map: 'alpha', steps: 5 })).toStrictEqual(['#FFFFFF00','#FFFFFF33','#FFFFFF66','#FFFFFF99','#FFFFFFCC'])
  expect(createPalette({ map: 'plasma', steps: 5, format: 'number' })).toStrictEqual([0x0D0887FF,0x7D03A8FF,0xA82296FF,0xE56B5DFF,0xFDC328FF])
  expect(createPalette({ steps: 100 }).length).toBe(100)
})
