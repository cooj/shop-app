<template>
    <view v-if="defData.step === 1" class="uni-input-wrapper">
        <input class="uni-input" placeholder="请输入当前手机号">
    </view>
    <view v-else>
        <view class="uni-input-wrapper">
            <input class="uni-input" placeholder="请输入短信验证码">
            <text class="uni-text">
                获取验证码
            </text>
        </view>
        <view class="uni-input-wrapper">
            <input class="uni-input" placeholder="请输入新密码" :password="defData.showPassword">
        </view>
        <view class="uni-input-wrapper">
            <input class="uni-input" placeholder="再次输入新密码" :password="defData.showPassword">
        </view>
    </view>
    <view class="mt50rpx">
        <button v-if="defData.step === 1" type="warn" @click="defData.step = 2">
            下一步
        </button>
        <button v-else type="warn">
            提交
        </button>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const defData = reactive({
    showPassword: true,
    step: 1,
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

.uni-text {
    font-size: 13px;
    color: rgb(166, 5, 5);
}
</style>
