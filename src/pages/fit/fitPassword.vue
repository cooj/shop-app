<template>
    <view class="uni-input-wrapper">
        <input class="uni-input" placeholder="请输入当前密码" :password="defData.showPassword">
    </view>
    <view class="uni-input-wrapper">
        <input class="uni-input" placeholder="请输入新密码" :password="defData.showPassword">
    </view>
    <view class="uni-input-wrapper">
        <input class="uni-input" placeholder="再次输入新密码" :password="defData.showPassword">
    </view>
    <view class="mt50rpx">
        <button type="warn">
            确定
        </button>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const defData = reactive({
    showPassword: true,
})
</script>

<style lang="scss" scoped>
.uni-input-wrapper {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    padding: 8px 13px;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #FFFFFF;
}

.uni-input {
    height: 28px;
    line-height: 28px;
    font-size: 15px;
    padding: 0px;
    flex: 1;
    background-color: #FFFFFF;
}
</style>
