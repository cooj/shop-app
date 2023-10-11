<template>
    <view class="uni-input-wrapper">
        <input v-if="defData.step === 1" v-model="form.phone" class="uni-input" placeholder="请输入当前手机号">
        <input v-else v-model="form.phone" class="uni-input" placeholder="请输入新手机号">
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
    <view class="mt50rpx">
        <button v-if="defData.step === 1" type="warn" @click="NextStep">
            验证进入下一步
        </button>
        <button v-else type="warn" @click="submit">
            提交
        </button>
    </view>
</template>

<script setup lang="ts">
import { ApiCommon, FitPhoneApi } from '@/service'

const defData = reactive({
    step: 1,
    send: {
        time: 0,
        visible: false,
        text: '',
    },
})
const form = reactive({
    phone: '', // 当前手机号
    sms_code: '', // 验证码
})
// 获取手机号验证码
const getCode = async () => {
    if (defData.send.visible) return
    const res = await ApiCommon.sendCode({ phone: form.phone, type: 4 })

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
// 点击 验证进入下一步
const NextStep = async () => {
    if (!form.phone) return showErrorModal('请输入当前手机号')
    if (!form.sms_code) return showErrorModal('请输入短信验证码')
    const data: FitPhoneApi_getCode = {
        phone: form.phone,
        sms_code: form.sms_code,
        plate_type: 2,
    }
    const res = await FitPhoneApi.getCode(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    uni.showModal({ title: '号码验证成功', showCancel: false })
    form.sms_code = ''
    form.phone = ''
    defData.send.visible = false
    defData.step = 2
}

// 提交
const submit = async () => {
    if (!form.phone) return showErrorModal('请输入新手机号')
    if (!form.sms_code) return showErrorModal('请输入短信验证码')
    const data: FitPhoneApi_edit = {
        phone: form.phone,
        sms_code: form.sms_code,
    }
    const res = await FitPhoneApi.edit(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    uni.showModal({ title: '修改手机号成功', showCancel: false })
    uni.navigateTo({
        url: '/pages/fit/index',
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
