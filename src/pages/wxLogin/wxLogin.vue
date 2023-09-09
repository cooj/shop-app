<template>
    <view>
        <view class="logo">
            <view class="pt-20 pl-30 text-xl">
                工游记logo
            </view>
        </view>
        <button class="loginBtn">
            微信一键登录
        </button>
    </view>

    <!-- 其他方式登录 -->
    <view class="other-ways">
        <text>其他登录方式</text>
    </view>
    <!-- 登录方式 -->
    <view class="login-way">
        <view class="way">
            <!-- <image src="/static/wx_ico.png" mode="" /> -->
            <!-- <text>账户登录</text>
            <text>手机验证</text> -->
        </view>
    </view>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import 'wxLogin.scss';
</style>
