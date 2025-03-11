import path from 'path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        commonjs()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.vue'],
    },
    build: {
        lib: {
            entry: "./src/index.ts",
            formats: ['cjs', 'es']
        }
    }
})
