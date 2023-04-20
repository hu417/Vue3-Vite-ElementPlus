import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    //设置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
      },
  },
  plugins: [
    vue(),
    WindiCSS()
  ],
})
