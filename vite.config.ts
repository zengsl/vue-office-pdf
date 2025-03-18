import path from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs(),
    dts({
      rollupTypes: false,
      outDir: './dist/types',
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts'],
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
      name: 'VuePdf',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
