import path from 'node:path'
import type { ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
    const env = loadEnv(mode.mode, process.cwd())

    return {
        resolve: {
            alias: {
                '@/': `${path.resolve(__dirname, 'src')}/`,
            },
        },
        plugins: [
            uni(),
            // https://github.com/antfu/unocss
            Unocss(),
            // https://github.com/antfu/unplugin-auto-import
            AutoImport({
                imports: [
                    'vue',
                    'uni-app',
                    'pinia',
                ],
                dirs: [
                    // './hooks',
                    'src/utils', // only root modules
                ],
                // dts: true,
                vueTemplate: true,
                dts: 'src/types/auto-imports.d.ts',
            }),
            Components({
                // dirs: ['src/uni_modules'],
                dts: 'src/types/components.d.ts',
            }),
        ],
        server: {
            // host: '0.0.0.0',
            port: Number(env.VITE_PORT) || undefined, // 开发启动的端口
            // open: env.VITE_OPEN,    // 是否自动打开浏览器
            // proxy: {
            //     "/api": {
            //         // target: "http://192.168.0.200:9091/api",
            //         target: env.VITE_API_URL,
            //         ws: true,
            //         changeOrigin: true,
            //         rewrite: (path) => path.replace(/^\/api/, ""),
            //     },
            // },

        },
    }
})
