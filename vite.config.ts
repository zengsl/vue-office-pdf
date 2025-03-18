import path from 'path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from 'vite-plugin-commonjs';
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        commonjs(),
        dts({
            rollupTypes: false,
            outDir:'./dist/types',
            tsconfigPath: './tsconfig.build.json'
        })
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
            formats: ['cjs', 'es'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
