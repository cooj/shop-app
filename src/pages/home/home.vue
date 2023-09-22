<template>
    <view>
        <view class="w100% h100rpx">
            <!-- 搜索框 -->
        </view>
        <view class="">
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
        <view class="w100% h100rpx">
            <!-- 自定义分类 -->
        </view>
    </view>
</template>

<script setup lang="ts">
const defData = reactive({
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
</script>

<style>
swiper {
    height: 300rpx;
    margin:0 10px;
}

.swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
}
.swiper-img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
</style>
