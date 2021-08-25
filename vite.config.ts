import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const pathSrc: string = path.resolve(__dirname, './src')
const pathStyles: string = path.resolve(__dirname, './src/styles')
const pathRoot: string = path.resolve(__dirname, './')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
      'styles': pathStyles,
      'root': pathRoot,
    },
  },
})
