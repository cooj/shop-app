<template>
    <view>
        <view class="scroll-view-container">
            <!-- 左侧列表 -->
            <scroll-view class="left-scroll-view" scroll-y="true" :style="{ height: `${defData.wh}px` }">
                <block v-for="(item, i) in defData.classifyList" :key="i">
                    <view class="left-scroll-view-item" :class="[i === defData.active ? 'active' : '']"
                        @click="activeChanged(i)">
                        {{ item.cat_name }}
                    </view>
                </block>
            </scroll-view>

            <!-- 右侧列表 -->
            <scroll-view scroll-y="true" :style="{ height: `${defData.wh}px` }" :scroll-top="defData.scrollTop">
                <view v-for="(item2, i2) in defData.cateTweLevel" :key="i2" class="cate-lv2">
                    <!-- 二级分类标题 -->
                    <view class="cate-lv2-title">
                        {{ item2.cat_name }}
                    </view>
                    <!-- 二级分类下的三级分类列表 -->
                    <view class="cate-lv3-list">
                        <view v-for="(item3, i3) in item2.children" :key="i3" class="cate-lv3-item">
                            <!-- 三级分类下的图片 -->
                            <image :src="item3.img" class="w60px h60px" />
                            <!-- 三级分类下的文本 -->
                            <text class="text-13px m1">
                                {{ item3.cat_name }}
                            </text>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ClassifyApi } from '@/service'

const defData = reactive({
    active: 0,
    scrollTop: 0,
    wh: 0, // 当前设备可用高度
    classifyList: [] as ClassifyApi_getListResponse[],
    cateTweLevel: [] as ClassifyApi_getListResponse['children'],
})

// 获取商品分类列表数据
const initData = async () => {
    const res = await ClassifyApi.getList()
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.classifyList = res.data
    defData.cateTweLevel = defData.classifyList[0].children
    console.log('defData.classifyList :>> ', defData.classifyList)
}

// 点击样式改变
const activeChanged = (i: any) => {
    defData.active = i

    // 重新为二级分类赋值
    defData.cateTweLevel = defData.classifyList[i].children
    console.log('defData.cateTweLevel :>> ', defData.cateTweLevel)
    defData.scrollTop = defData.scrollTop ? 1 : 0
}

// 页面加载时
onMounted(() => {
    const sysInfo = uni.getSystemInfoSync()
    defData.wh = sysInfo.windowHeight

    initData()
})
</script>

<style lang="scss" scoped>
.scroll-view-container {
    display: flex;

    .left-scroll-view {
        width: 120px;

        .left-scroll-view-item {
            background-color: #f7f7f7;
            line-height: 60px;
            text-align: center;
            font-size: 12px;

            &.active {
                background-color: #ffffff;
                position: relative;
                font-weight: bold;

            }
        }
    }
}

.cate-lv2-title {
    font-size: 13px;
    font-weight: bold;
    /* text-align: center; */
    padding: 15px 0;
    margin-left: 15px;
}

.cate-lv3-list {
    display: flex;
    flex-wrap: wrap;

    .cate-lv3-item {
        width: 33.33%;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
}
</style>
