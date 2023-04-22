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

  // 使用代理解决CORS跨域问题
  server: {
    proxy: {
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://ceshi13.dishait.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
