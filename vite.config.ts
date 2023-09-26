import path from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
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
            // dts: true,
            vueTemplate: true,
            dts: 'src/types/auto-imports.d.ts',
        }),
        Components({
            dts: 'src/types/components.d.ts',
        }),
    ],
})
