<template>
    <view class="commodity">
        <!-- 单个商品组件 -->
        <view v-for="(item, i) in props.data" :key="i" class="commodity-item">
            <image class="commodity-img" :src="item.imgUrl" />
            <view class="commodity-content">
                <text class="commodity-name">
                    {{ item.name }}
                </text>

                <text class="commodity-price">
                    {{ item.price }}
                </text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
const props = defineProps({
    data: {
        type: Array,
    },
})
</script>

<style scoped>
.commodity {
    display: flex;
    flex-wrap: wrap;
}

.commodity-item {
    width: 335rpx;
    margin: 0 18rpx 18rpx 18rpx;
    margin-bottom: 20rpx;
    border: 1.5px solid #d2d0d0;
    border-radius: 10px;
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
    color: #ee4e0a;
}
</style>
