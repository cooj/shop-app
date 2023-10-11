<template>
    <view v-if="defData.step === 1">
        <view class="uni-input-wrapper">
            <input v-model="form.phone" class="uni-input" placeholder="请输入当前手机号">
        </view>
        <view class="uni-input-wrapper">
            <input v-model="form.sms_code" class="uni-input" placeholder="请输入短信验证码">
            <text v-if="defData.send.visible">
                {{ defData.send.text }}
            </text>
            <text v-else class="uni-text" @click="getCode">
                获取验证码
            </text>
        </view>
    </view>
    <view v-else>
        <view class="uni-input-wrapper">
            <input v-model="form.define_password" class="uni-input" placeholder="请输入新密码" :password="defData.showPassword">
        </view>
        <view class="uni-input-wrapper">
            <input v-model="form.confirm_password" class="uni-input" placeholder="再次输入新密码" :password="defData.showPassword">
        </view>
    </view>
    <view class="mt50rpx">
        <button v-if="defData.step === 1" type="warn" @click="NextStep">
            下一步
        </button>
        <button v-else type="warn" @click="onClick">
            提交
        </button>
    </view>
</template>

<script setup lang="ts">
import { ApiCommon, FitPhoneApi, ForgetPasswordApi } from '@/service'

const defData = reactive({
    showPassword: true,
    step: 1,
    code: '', // 密码验证码
    send: {
        time: 0,
        visible: false,
        text: '',
    },
})
const form = reactive({
    phone: '',
    sms_code: '',
    step: 1,
    define_password: '',
    confirm_password: '', // 新密码
})
// 获取手机号验证码
const getCode = async () => {
    if (defData.send.visible) return
    const res = await ApiCommon.sendCode({ phone: form.phone, type: 3 })

    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }
    defData.send.visible = true
    let time = 60
    defData.send.text = `${time}秒后重新获取`
    defData.send.time = setInterval(() => {
        time--
        defData.send.text = `${time}秒后重新获取`
        if (time <= 0) {
            clearInterval(defData.send.time)
            defData.send.visible = false
            defData.send.text = '获取验证码'
        }
    }, 1000)
}

// 下一步
const NextStep = async () => {
    if (!form.phone) return showErrorModal('请输入当前手机号')
    if (!form.sms_code) return showErrorModal('请输入验证码')
    const data: FitPhoneApi_getCode = {
        sms_code: form.sms_code,
        phone: form.phone,
        plate_type: 2,
    }
    const res = await FitPhoneApi.getCode(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.code = res.data.code
    // uni.showModal({ title: '手机号验证成功', showCancel: false })
    defData.step = 2
}
// 提交
const onClick = async () => {
    if (!form.define_password) return showErrorModal('请输入新密码')
    if (!form.confirm_password) return showErrorModal('请输入再次输入新密码')
    if (form.define_password !== form.confirm_password) return showErrorModal('新密码输入不一致,请重新输入')
    const data: ForgetPasswordApi_edit = {
        password: form.confirm_password,
        define_password: form.define_password,
        code: defData.code,
        phone: form.phone,
    }
    const res = await ForgetPasswordApi.edit(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    uni.showModal({
        title: '找回密码成功,去登录',
        showCancel: false,
        success() {
            uni.navigateTo({
                url: '/pages/login/index',
            })
        },
    })
}
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
