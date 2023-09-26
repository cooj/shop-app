<template>
    <view class="record-data">
        <view v-for="(item, index) in 3" :key="index" class="w100%">
            <view class="goods-list">
                <view v-for="(value, idx) in 1" :key="idx" class="list">
                    <!-- <view class="check" :style="isEdit ? 'display: flex' : 'display: none'">
                        <text class="iconfont icon-check" />
                    </view> -->
                    <view class="thumb">
                        <image class="thumb-image"
                            src="https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343165243.jpg?x-oss-process=image/quality,Q_50"
                            mode="" />
                    </view>
                    <view class="item">
                        <view class="title">
                            <text class="text-27">
                                垠青牛 双臂数显拉力试验机 YQN-2S-100KN 量程：100KN/1级
                            </text>
                        </view>
                        <view class="goods-btn">
                            <view class="price">
                                ￥9999.99/件
                            </view>
                            <view class="cart">
                                <image src="/src/static/heart.png" class="w45 h45" />
                                <!-- <image src="/src/static/s_heart.png" class="w45 h45" /> -->
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="footer-btn" :style="isEdit ? 'display: flex' : 'display: none'">
        <!-- <view class="btn">
            删除
        </view> -->
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isEdit = ref('false')
</script>

<style scoped>
.page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
}

.record-data {
    width: 100%;
    /* margin-top: 20rpx; */
    background-color: #f8f8f8;
    padding-bottom: 80rpx;
}

.list {
    display: flex;
    align-items: center;
    height: 180rpx;
    margin: 20rpx;
    background: #ffffff;
    border-radius: 10rpx;

}

.thumb {
    width: 28%;
    height: 150rpx;
    /* background-color: #cb4f4f; */
}

.thumb-image {
    width: 150rpx;
    height: 150rpx;
    /* border-radius: 10rpx; */
    margin-left: 10rpx;
}

.item {
    width: 60%;
    height: 100%;
    border-bottom: 2rpx solid #f6f6f6;
}

.title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 120rpx;
    /* background: #000; */

    /* text {
        font-size: 26rpx;
        color: #222222;
    } */
}

.goods-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background: #c98282; */
}

.price {
    display: flex;
    align-items: center;
}

.cart {
    display: flex;
    align-items: center;
}
</style>
