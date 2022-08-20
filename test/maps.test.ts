import { describe, it, expect } from 'vitest'
import maps from '../lib/maps'

describe('maps', () => {
  it('has indices between 0 and 1', () => {
    expect(Object.values(maps).flat().every(([index]) => index >= 0 && index <= 1)).toBeTruthy()
  })

  it('has colour values between 0 and 0xFFFFFFFF', () => {
    expect(Object.values(maps).flat().every(([, color]) => color >= 0 && color <= 0xFFFFFFFF)).toBeTruthy()
  })
})
