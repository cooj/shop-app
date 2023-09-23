<template>
    <view>
        <view class="logo">
            <view class="pt-20 pl-30 text-xl">
                工游记logo
            </view>
        </view>
        <button v-if="form.isRead" class="loginBtn">
            微信一键登录
        </button>
        <button v-else class="loginWx" open-type="getPhoneNumber" @tap="handleRead">
            微信一键登录
        </button>

        <view class="read">
            <label>
                <checkbox-group @change="handleCheckRead">
                    <label>
                        <checkbox value="true" />
                        <text>若手机号未注册将进入注册流程，注册即为同意 <text class="c-#fa5215">《工游记服务协议》</text>和<text
                            class="c-#fa5215">《工游记隐私协议》</text></text>
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
    <view class="login-other">
        <view class="other-item" @click="wxRoute">
            <image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" class="login-image" />
            <view>账户登录</view>
        </view>
        <view class="other-item" @click="wxRoute">
            <image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" class="login-image" />
            <view>手机验证</view>
        </view>
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
    })
}

const wxRoute = () => {
    uni.navigateTo({
        url: '/pages/login/phoneLogin/phoneLogin',
    })
}
</script>

<style scoped>
.logo {
    width: 100%;
    height: 300rpx;
    /* background-color: antiquewhite; */
}

.loginBtn {
    background-color: #1aac1b;
    color: white;
}

.loginWx {
    background-color: #aeaeae;
    color: white;
}

/* 其他 */
.other-ways {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80rpx;
    margin-top: 60rpx;

    text {
        font-size: 28rpx;
        color: #999999;
    }
}

.other-ways::after {
    content: "";
    width: 36%;
    height: 2rpx;
    background-color: #EEEEEE;
}

.other-ways::before {
    content: "";
    width: 36%;
    height: 2rpx;
    background-color: #EEEEEE;
}

/* 登录方式 */
.login-other {
    display: flex;
    justify-content: space-around;
}

.other-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666565;
}

.login-image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
}

.read {
    text-align: center;
    font-size: 14px;
    color: #959595;
    margin-top: 25rpx;
    margin-left: 35rpx;
    margin-right: 35rpx;
}
</style>
