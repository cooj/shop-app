<template>
    <view class="bg-#e2f3fe p-4">
        <uni-list>
            <uni-list-item v-for="item in routeList" :key="item.path" link :to="item.path" :show-arrow="false">
                <template #body>
                    <text class="font-bold">
                        {{ item.meta.navigationBar.titleText }}
                    </text>:{{ item.path }}
                </template>
            </uni-list-item>
        </uni-list>

        <view class="text-lg mb-2 text-c2">
            使用 class
        </view>
        <view class="p-5 bg-white rounded-xl shadow-md flex items-center mx-auto">
            <view>
                <view
                    class="h-100 w-100 bg-cover bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
            </view>
            <view class="ml-5">
                <view class="text-xl text-c1">
                    UnoCSS
                </view>
                <view class="text-c3">
                    The instant on-demand Atomic CSS engine.
                </view>
            </view>
        </view>
        <view class="h500px bg-#fafafa">
            <LayoutTabBar />
        </view>
        <view class="flex mb-2 mt-4">
            <view class="text-lg text-c2 mr-4">
                切换 class
            </view>
            <view class="bg-#3498db/20 text-#3498db rounded px-2 py-1" @click="switchFlag">
                点我切换
            </view>
        </view>

        <view class="p-5 rounded-xl shadow-md flex items-center mx-auto" :class="[flag ? 'bg-white' : 'bg-green']">
            <view>
                <view
                    class="h-100 w-100 bg-cover bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
            </view>
            <view class="ml-5">
                <view class="text-xl">
                    UnoCSS
                </view>
                <view class="text-c3">
                    The instant on-demand Atomic CSS engine.
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
const flag = ref(true)
function switchFlag() {
    flag.value = !flag.value
}

const routeList = ref<any[]>([])

// const router = useRouter()
// console.log('router :>> ', router)
const routes = getCurrentPages() // 获取当前打开过的页面路由数组
// console.log('routes :>> ', routes)
// console.log(routes.$getAppWebview())

onShow((option) => {
    const pro = routes[0].$.appContext.provides

    const tt = Object.getOwnPropertySymbols(pro)
    // console.log('pro[x] :>> ', pro[tt[1]])

    const routeData = pro[tt[1]]

    routeList.value = routeData.getRoutes()
    console.log('routeList.value :>> ', routeList.value)
})
</script>
