<template>
    <view class="page">
        <view class="logo">
            <!-- <image src="../../static/logo.png" mode="" /> -->
        </view>
        <!-- 填写区 -->
        <view class="input-info">
            <view class="w80% h500rpx p-4">
                <view class="w100% h80rpx">
                    <text @click="loginClick">
                        密码登录
                    </text>
                    <text @click="validateClick">
                        验证码登录
                    </text>
                </view>
                <view class="info">
                    <input v-model="form.phone" type="tel" maxlength="11" placeholder="手机号">
                    <view class="more" />
                </view>
                <view v-if="defData.type === 1" class="info">
                    <input v-model="form.password" placeholder="请输入密码">
                    <view class="more" />
                </view>
                <view v-else class="info">
                    <input v-model="form.code" type="tel" maxlength="6" placeholder="请输入验证码">
                    <view class="more">
                        <text class="mo">
                            获取验证码
                        </text>
                        <text class="mo" style="display: none">
                            59秒后重试
                        </text>
                    </view>
                </view>
                <view>
                    <text>
                        忘记密码？
                    </text>
                    <text @click="registerRoute">
                        立即注册
                    </text>
                </view>
                <view class="btn-info">
                    <view class="btn">
                        <text>登录</text>
                    </view>
                </view>
            </view>
        </view>

        <!-- 操作 -->
        <view class="operation">
            <text />
            <text />
        </view>
        <!-- 其他方式登录 -->
        <view class="other-ways">
            <text>其他登录方式</text>
        </view>
        <!-- 登录方式 -->
        <view class="login-way">
            <view class="way" @click="wxRoute">
                <text>
                    微信登录
                </text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
const form = reactive({
    phone: '',
    code: '',
    password: '',
})

const defData = reactive({
    type: 1, // 1账户登录 2验证码登录
})

const wxRoute = () => {
    uni.navigateTo({
        url: '/pages/login/wxLogin/wxLogin',
    })
}
const registerRoute = () => {
    uni.navigateTo({
        url: '/pages/register/register',
    })
}

// 点击账号登录
const loginClick = () => {
    defData.type = 1
}

// 点击验证码登录
const validateClick = () => {
    defData.type = 2
}
</script>

<style scoped>
@import 'phoneLogin.scss';
</style>
