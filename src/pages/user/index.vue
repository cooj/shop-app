<template>
    <view>
        <button @click="wxRoute">
            微信一键登录
        </button>
        <button @click="phoneRoute">
            手机验证登录
        </button>
        <button @click="registerRoute">
            注册
        </button>
        <!-- <button @click="addressRoute">
            我的地址
        </button> -->
        <button @click="collectionRoute">
            我的收藏
        </button>
        <button @click="browsingRoute">
            浏览历史
        </button>
    </view>
</template>

<script setup lang="ts">
const wxRoute = () => {
    uni.navigateTo({
        url: '/pages/login/wxLogin/wxLogin',
    })
}
const phoneRoute = () => {
    uni.navigateTo({
        url: '/pages/login/phoneLogin/phoneLogin',
    })
}
const registerRoute = () => {
    uni.navigateTo({
        url: '/pages/register/register',
    })
}
const addressRoute = () => {
    uni.navigateTo({
        url: './address/userAddress',
    })
}
const collectionRoute = () => {
    uni.navigateTo({
        url: './collection/userCollection',
    })
}
const browsingRoute = () => {
    uni.navigateTo({
        url: './browsing/userBrowsing',
    })
}
</script>
