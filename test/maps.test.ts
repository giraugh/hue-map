import { expect, test } from 'vitest'
import maps from '../lib/maps'

test('valid', () => {
  // Index is between 0 and 1
  expect(Object.values(maps).every(map => map.every(([index]) => index >= 0 && index <= 1))).toBeTruthy()

  // Colour is between 0 and 0xFFFFFFFF
  expect(Object.values(maps).every(map => map.every(([, color]) => color >= 0 && color <= 0xFFFFFFFF))).toBeTruthy()
})
