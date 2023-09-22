<template>
    <view>
        <view class="w100% h100rpx">
            搜索框
        </view>
        <view class="uni-margin-wrap">
            <swiper class="swiper" circular indicator-dots="true" autoplay="true" interval="5000" duration="500">
                <!--   <swiper-item>
                    <view v-for="(item, index) in defData.swiperList" :key="index" class="swiper-item uni-bg-red">
                        <image
                            :src="item.url" mode="aspectFill" />
                    </view>
                </swiper-item> -->
                <swiper-item>
                    <view class="swiper-item uni-bg-red">
                        <image
                            src="https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230522/202305221547174353.jpg?x-oss-process=image/quality,Q_50" />
                    </view>
                </swiper-item>
                <swiper-item>
                    <view class="swiper-item uni-bg-red">
                        <image
                            src="https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230530/202305301913593711.jpg?x-oss-process=image/quality,Q_50" />
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="w100% h200rpx">
            自营品牌
        </view>
        <view class="w100% h100rpx">
            自定义分类
        </view>
    </view>
</template>

<script setup lang="ts">
// import { BannerApi } from '@/service/api/home/banner'

const defData = reactive({
    swiperList: [],
})

const initData = async () => {

}
</script>

<style>
.uni-margin-wrap {
    width: 690rpx;
    width: 100%;
}

.swiper {
    height: 300rpx;
}

.swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
}

.swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
}

.uni-common-mt {
    margin-top: 60rpx;
    position: relative;
}

.info {
    position: absolute;
    right: 20rpx;
}

.uni-padding-wrap {
    width: 550rpx;
    padding: 0 100rpx;
}
</style>
