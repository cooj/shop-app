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
</script>
