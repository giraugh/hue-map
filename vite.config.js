/* eslint-env node */
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  resolve: {},
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'hue-map',
      fileName: 'hue-map',
    },
  }
})
