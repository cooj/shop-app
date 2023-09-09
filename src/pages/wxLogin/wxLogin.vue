<template>
    <view>
        <view class="logo">
            <view class="pt-20 pl-30 text-xl">
                工游记logo
            </view>
        </view>
        <button v-if="form.isRead" class="loginBtn" @tap="handleRead">
            微信一键登录
        </button>
        <button v-else class="loginWx" open-type="getPhoneNumber">
            微信一键登录
        </button>

        <view class="read">
            <label>
                <checkbox-group @change="handleCheckRead">
                    <label>
                        <checkbox value="true" />
                        <text>若手机号未注册将进入注册流程，注册即为同意《工游记服务协议》和《工游记隐私协议》</text>
                    </label>
                </checkbox-group>
            </label>
        </view>
    </view>

    <!-- 其他方式登录 -->
    <view class="other-ways">
        <text>其他登录方式</text>
    </view>
    <!-- 登录方式 -->
    <view class="login-way">
        <!--  <view class="way">
            <text>账户登录</text>
            <text>手机验证</text>
        </view>
        -->
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    isRead: false,
})

// 勾选框
const handleCheckRead = ({ detail }: { detail: any }) => {
    form.isRead = !!detail.value.length
}
// 未勾选用户协议 提示
const handleRead = () => {
    uni.showToast({
        title: '请勾选用户协议',
        duration: 2000,
    })
}
</script>

<style scoped>
@import 'wxLogin.scss';
</style>
