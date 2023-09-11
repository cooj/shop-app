<template>
    <view class="bg-#e2f3fe p-4">
        个人中心
    </view>
    <view>
        <button @click="wxRoute">
            微信登录
        </button>
        <button @click="registerRoute">
            注册
        </button>
    </view>
</template>

<script setup lang="ts">
const wxRoute = () => {
    uni.navigateTo({
        url: '/pages/wxLogin/wxLogin',
    })
}

const registerRoute = () => {
    uni.navigateTo({
        url: '/pages/register/register',
    })
}
</script>
