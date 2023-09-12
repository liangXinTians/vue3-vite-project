import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue()
  ],
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:5175',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   },
  // },
})