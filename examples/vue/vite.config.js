import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const isModStart = !!process.env.IS_MODSTART
const BASE_PATH = '/ueditor-plus-designer/demo/examples/vue/';
const CDN_URL = 'https://open-cdn.modstart.com/ueditor-plus-designer/demo/examples/vue/';

console.log('isModStart',isModStart)

export default defineConfig({
    plugins: [vue()],
    base: isModStart ? BASE_PATH : './',
    resolve: {
        alias: {
            // Link to the parent project's dist folder for testing
            'ueditor-plus-designer': resolve(__dirname, '../../dist/vue/vue.es.js'),
            'ueditor-plus-designer/style': resolve(__dirname, '../../dist/vue/vue-style.css')
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
