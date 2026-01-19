// @ts-nocheck - vite plugin type compatibility
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const isModStart = !!process.env.IS_MODSTART
const BASE_PATH = '/ueditor-plus-designer/demo/examples/react/';
const CDN_URL = 'https://open-cdn.modstart.com/ueditor-plus-designer/demo/examples/react/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // veaury requires both React and Vue plugins
    react(),
    vue()
  ],
  base: isModStart ? BASE_PATH : './',
  resolve: {
    alias: {
      // Link to the parent project's dist folder for testing
      'ueditor-plus-designer': resolve(__dirname, '../../dist/react/react.es.js'),
      'ueditor-plus-designer/style': resolve(__dirname, '../../dist/react/react-style.css')
    }
  },
  experimental: {
    renderBuiltUrl(filename, {hostType, type}) {
      // console.log('renderBuiltUrl', {isModStart, filename, hostType, type});
      if (isModStart) {
        return `${CDN_URL}${filename}`
      }
      return {relative: true}
    }
  },
})
