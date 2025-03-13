import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  slidev: {
    vue: {
      ...templateCompilerOptions,
    },
  },
  plugins: [
    svgLoader(),
  ],
})
