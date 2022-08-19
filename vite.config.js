/* eslint-env node */
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [],
  resolve: {
    alias: {
      'hue-map': resolve(__dirname, '/lib/index.ts')
    }
  },
  build: {
    ...mode !== 'demo' && { lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'hue-map',
      fileName: 'hue-map',
    }},
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  }
}))
