<template>
    <view class="bg-#e2f3fe p-4">
        个人中心
    </view>
    <view>
        <button @click="routeClick">
            微信登录
        </button>
    </view>
</template>

<script setup lang="ts">
const routeClick = () => {
    uni.navigateTo({
        url: '/pages/wxLogin/wxLogin',
    })
}
</script>
