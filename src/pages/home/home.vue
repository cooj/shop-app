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
                        <image :src="item.banner_img" class="swiper-img" />
                    </view>
                </swiper-item>
            </swiper>
        </view>

        <!-- <view class="mt10rpx ml2 text-30">
            自营品牌
        </view>
        <swiper class="w100% h-200 ml2">
            <swiper-item v-for="item in defData.brandList" :key="item.brand_id" class="">
                <view class="bg-#3498db/20 w100px h70rpx m1 ">
                    <image :src="item.brand_logo" class="" />
                </view>
            </swiper-item>
        </swiper> -->

        <!-- 自定义分类 -->
        <view class="mt10rpx">
            <!-- 导航 -->
            <scroll-view :scroll-x="true" class="scroll-content" :show-scrollbar="false"
                :scroll-into-view="defData.scrollIntoIndex">
                <view v-for="(item, i) in defData.recommendList" :id="item.cate_id" :key="item.cate_id" class="scroll-item"
                    :data-current="i" @tap="changIndex(i)">
                    <text :class="defData.recommendIndex === i ? 'active' : ''">
                        {{ item.cate_name }}
                    </text>
                </view>
            </scroll-view>
            <!-- 自定义商品页面 -->
            <scroll-view scroll-y :style="{ height: `${defData.wh}px` }">
                <swiper :current="defData.recommendIndex" style="height: 1000rpx;width: 100%;"
                    @change="onChangeTab(defData.recommendIndex)">
                    <swiper-item v-for="(item, i) in defData.recommendList" :key="i">
                        <!-- 单个商品 -->
                        <view class="commodity">
                            <view v-for="(a, index) in defData.goodsList" :key="index" class="commodity-item">
                                <image class="commodity-img" :src="a.goods_img" />
                                <view class="commodity-content">
                                    <text class="commodity-name">
                                        {{ a.goods_name }}
                                    </text>
                                    <text class="commodity-price">
                                        {{ a.shop_price }}
                                    </text>
                                </view>
                            </view>
                        </view>
                    </swiper-item>
                </swiper>
            </scroll-view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { BannerApi, BrandApi, CateGoodsApi } from '@/service'

const defData = reactive({
    recommendIndex: 0, // 自定义商品分类 选中的下标值
    scrollIntoIndex: 'classify0', // 页面刷新时自定义分类顶部默认索引值
    wh: 0, // 当前设备可用高度
    recommendList: [] as CateGoodsApi_getListResponse[],
    goodsList: [] as CateGoodsApi_getListResponse['goods_lists'],
    swiperList: [] as BannerApi_getListResponse[], // 轮播图
    brandList: [] as BrandApi_getListResponse['lists'], // 品牌列表
})

// 获取轮播图数据
const initSwiperData = async () => {
    const res = await BannerApi.getList()
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.swiperList = res.data
}

// 获取商品分类数据
const initCateData = async () => {
    const res = await CateGoodsApi.getList()
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.recommendList = res.data
    defData.goodsList = res.data[defData.recommendIndex].goods_lists
    console.log('defData.recommendIndex :>> ', defData.recommendIndex)
    console.log('defData.goodsList :>> ', defData.goodsList)
}

// 自定义分类导航 选中的下标值
const changIndex = (i: any) => {
    defData.recommendIndex = i
    defData.scrollIntoIndex = `classify${i}`
    initCateData()
}

// 推荐商品页
const onChangeTab = (e: any) => {
    changIndex(e)
    // console.log('e :>> ', e)
}

// 获取品牌数据
const initBrandData = async () => {
    const res = await BrandApi.getList()
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.brandList = res.data.lists
    console.log('defData.brandList :>> ', defData.brandList)
}

// 页面加载时
onMounted(() => {
    const sysInfo = uni.getSystemInfoSync()
    defData.wh = sysInfo.windowHeight
    initSwiperData()
    initCateData()
    initBrandData()
})
</script>

<style lang="scss" scoped>
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
    border-bottom: 6rpx solid #d7231e;
}

.commodity {
    display: flex;
    flex-wrap: wrap;
}

.commodity-item {
    width: 335rpx;
    margin: 0px 0px 15px 5px;
    border: 2px solid #d2d0d0;
    border-radius: 4px;
}

.commodity-img {
    width: 100%;
    height: 335rpx;
}

.commodity-content {
    text-align: center;
}

.commodity-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #555454;
    word-break: break-all;
    padding: 8rpx 20rpx;
    font-size: 28rpx;
    font-weight: bold;
}

.commodity-price {
    text-decoration: 4rpx;
    font-size: 28rpx;
    color: #d7231e;
}
</style>
