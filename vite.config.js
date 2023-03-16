/* eslint-env node */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => ({
  plugins: [
    dts({
      insertTypesEntry: true,
    })
  ],
  resolve: {
    alias: {
      'hue-map': resolve(__dirname, '/lib/index.ts')
    }
  },
  build: {
    ...mode !== 'demo' && { lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'hueMap',
      fileName: 'hue-map',
    }},
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  }
}))
