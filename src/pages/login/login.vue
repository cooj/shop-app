<template>
    <view class="page">
        <view class="logo">
            <!-- <image src="../../static/logo.png" mode="" /> -->
        </view>
        <!-- 填写区 -->
        <view class="input-info">
            <view class="info">
                <input v-model="form.phone" type="tel" maxlength="11" placeholder="手机号">
                <view class="more" />
            </view>
            <view class="info">
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
        </view>
        <!-- 按钮 -->
        <view class="btn-info">
            <view class="btn">
                <text>登录</text>
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
            <view class="way">
                <!-- <image src="/static/wx_ico.png" mode="" /> -->
                <text>微信登录</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
const form = reactive({
    phone: '',
    code: '',
})
// export default {
//     data() {
//         return {
//             isLogin: false,
//             isLoginWay: false,
//             isPassword: false,
//             // 表单
//             form: {
//                 phone: '',
//                 code: '',
//                 password: '',
//             },
//         }
//     },
//     watch: {
//         form: {
//             handler(newValue, oldValue) {
//                 // 验证码
//                 if (this.isLoginWay) {
//                     this.isLogin = !!(newValue.code && newValue.phone)
//                 }
//                 // 账号密码
//                 if (!this.isLoginWay) {
//                     this.isLogin = !!(newValue.password && newValue.phone)
//                 }
//             },
//             deep: true,
//         },
//     },
//     methods: {
//         onRegister() {
//             uni.navigateTo({
//                 url: '/pages/register/register',
//             })
//         },
//         /**
//* 登录切换
// */
//         onLoginCut() {
//             this.isLoginWay = !this.isLoginWay
//             // 验证码
//             if (this.isLoginWay) {
//                 this.isLogin = !!(this.form.code && this.form.phone)
//             }
//             // 账号密码
//             if (!this.isLoginWay) {
//                 this.isLogin = !!(this.form.password && this.form.phone)
//             }
//         },
//         /**
// * 登录点击
// */
//         onLogin() {},
//     },
// }
</script>

<style scoped>
@import 'login.scss';
</style>
