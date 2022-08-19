/* eslint-env node */
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      'hue-map': resolve(__dirname, '/lib/index.ts')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'hue-map',
      fileName: 'hue-map',
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'sample/index.html'),
      },
    },
  }
})
