<template>
    <view>
        <view class="w100% h100rpx">
            <!-- 搜索框 -->
        </view>

        <!-- 轮播图 -->
        <view>
            <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
                <swiper-item v-for="(item, i) in defData.swiperList" :key="i">
                    <view class="swiper-item">
                        <image :src="item.url" class="swiper-img" />
                    </view>
                </swiper-item>
            </swiper>
        </view>

        <view class="w100% h200rpx">
            <!-- 自营品牌 -->
        </view>

        <!-- 自定义分类 -->
        <view>
            <!-- 导航 -->
            <scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="defData.scrollIntoIndex">
                <view v-for="(item, i) in defData.recommendList" :id="`classify${i}`" :key="i" class="scroll-item"
                    @tap="changIndex(i)">
                    <text :class="defData.recommendIndex === i ? 'active' : ''">
                        {{ item.name }}
                    </text>
                </view>
            </scroll-view>
            <!-- 推荐商品列表 -->
            <CommodityList />
            <!-- <scroll-view scroll-y :style="{ height: `${defData.wh}px` }">
                <swiper :current="defData.recommendIndex" style="height: 1000rpx;width: 100%;" @change="onChangeTab(defData.recommendIndex)">
                    <swiper-item v-for="(item, i) in defData.recommendList" :key="i" class="scroll-item">
                        <view>
                            <CommodityList />
                        </view>
                    </swiper-item>
                </swiper>
            </scroll-view> -->
        </view>
    </view>
</template>

<script setup lang="ts">
import CommodityList from '@/components/common/CommodityList.vue'

const defData = reactive({
    recommendIndex: 0, // 自定义商品分类 选中的下标值
    scrollIntoIndex: 'classify0', // 页面刷新时自定义分类顶部默认索引值
    wh: 0, // 当前设备可用高度

    recommendList: [
        {
            name: '推荐',
        },
        {
            name: '户外装备',
        },
        {
            name: '坡口机',
        },
        {
            name: '机械设备',
        },
        {
            name: '设备配件',
        },
        {
            name: '自定义分类1',
        },
        {
            name: '自定义分类2',
        },
    ],
    swiperList: [
        {
            url: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230607/202306070843255789.jpg?x-oss-process=image/quality,Q_50',
        },
        {
            url: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230522/202305221547174353.jpg?x-oss-process=image/quality,Q_50',
        },
    ],
})

const initData = async () => {

}
// 自定义分类导航 选中的下标值
const changIndex = (i: any) => {
    defData.recommendIndex = i
    defData.scrollIntoIndex = `classify${i}`
}

// 推荐商品页
// const onChangeTab = (e: any) => {
//     changIndex(e)
//     console.log('e :>> ', e)
// }

// 页面加载时
onMounted(() => {
    const sysInfo = uni.getSystemInfoSync()
    defData.wh = sysInfo.windowHeight
})
</script>

<style>
/* 轮播图 */
swiper {
    height: 300rpx;
    margin: 0 10px;
}

.swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
}

.swiper-img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

/* 自定义分类 */
.scroll-content {
    width: 100%;
    height: 80rpx;
    white-space: nowrap;
}

.scroll-item {
    display: inline-block;
    padding: 10rpx 30rpx;
    font-size: 30rpx;
}

.active {
    border-bottom: 6rpx solid #f02288;
}
</style>
