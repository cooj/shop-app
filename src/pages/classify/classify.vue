<template>
    <view>
        <view class="cateBox">
            <!-- 左侧列表 -->
            <scroll-view class="cate-left" scroll-y="true" :style="{ height: `${defData.wh}px` }">
                <view v-for="(item, index) in defData.classifyList" :key="index"
                    @click="activeChanged(index)">
                    <!-- activeItem为选中状态 -->
                    <view class="cate-left-item " :class="{ activeItem: defData.active === index }">
                        <label /><text>{{ item.cat_name }}</text>
                    </view>
                </view>
            </scroll-view>

            <!-- 右侧列表 -->
            <scroll-view class="cate-right" scroll-y="true" :style="{ height: `${defData.wh}px` }" :scroll-top="defData.scrollTop">
                <view v-for="(item2, i2) in defData.cateTweLevel" :id="`cate-${i2}`" :key="i2">
                    <view class="cate-right-title">
                        <view class="line" />
                        <text>{{ item2.cat_name }}</text>
                    </view>
                    <view class="cate-right-list">
                        <view v-for="(item3, i3) in item2.children" :key="i3" class="cate-right-item">
                            <image :src="item3.img" mode="" />
                            <text>{{ item3.cat_name }}</text>
                        </view>
                    </view>
                </view>
                <view style="height: 50rpx;" />
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

    mainCur: 0,
    currentTab: 0,
    verticalNavTop: 0,
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
.cateBox {
    position: absolute;
    // top: 120rpx;
    bottom: 0;
    background: #fff;
    width: 100%;
    display: flex;
}

.cate-left {
    width: 200rpx;
    background: #f4f4f4;
    height: 100%;
}

.cate-left-item {
    background: #f4f4f4;
    height: 50px;
    display: flex;
    align-items: center;
}

.cate-left-item.activeItem {
    background: #fff;
}

.cate-left-item label {
    width: 4rpx;
    height: 15px;
    float: left;
    background: #f4f4f4;
}

.cate-left-item.activeItem label {
    background: #d7231e;
}

.cate-left-item text {
    width: 196rpx;
    font-size: 28rpx;
    display: block;
    text-align: center;
}

/* 右侧*/
.cate-right {
    flex: 1;
}

.cate-right-title {
    text-align: center;
    font-size: 28rpx;
    margin-top: 20rpx;
    line-height: 80rpx;
    position: relative;
}

.cate-right-title .line {
    position: absolute;
    height: 2rpx;
    width: 300rpx;
    background: #d7231e;
    top: 39rpx;
    left: 50%;
    margin-left: -150rpx;
}

.cate-right-title text {
    background: #fff;
    padding: 0 10px;
    position: relative;
    color: #d7231e;
}

.cate-right-list {
    height: auto;
    overflow: hidden;
}

.cate-right-item {
    width: 33.33%;
    float: left;
    margin-top: 20rpx;
}

.cate-right-item image {
    width: 160rpx;
    height: 160rpx;
    display: block;
    margin: 0 auto;
}

.cate-right-item text {
    display: block;
    text-align: center;
    font-size: 24rpx;
}
</style>
