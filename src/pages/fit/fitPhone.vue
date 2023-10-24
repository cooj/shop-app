<template>
    <view class="p15px">
        <uni-forms ref="formRef" :rules="rules" :model-value="form" label-width="70px">
            <uni-forms-item label="手机号：" name="phone">
                <uni-easyinput v-if="defData.step === 1" v-model="form.phone" placeholder="请输入当前手机号" />
                <uni-easyinput v-else v-model="form.phone" placeholder="请输入新手机号" />
            </uni-forms-item>
            <uni-forms-item label="验证码：" name="sms_code">
                <view class="flex">
                    <uni-easyinput v-model="form.sms_code" placeholder="请输入短信验证码" />
                    <button v-if="defData.send.visible" type="warn" plain class="uni-text">
                        {{ defData.send.text }}
                    </button>
                    <button v-else type="warn" plain class="uni-text" @click="getCode">
                        获取验证码
                    </button>
                </view>
            </uni-forms-item>
        </uni-forms>
        <button v-if="defData.step === 1" type="warn" @click="NextStep">
            验证进入下一步
        </button>
        <button v-else type="warn" @click="submit()">
            确定
        </button>
    </view>
</template>

<script setup lang="ts">
import { ApiCommon, FitPhoneApi } from '@/service'

const formRef = ref<UniHelper.UniForms>()
const rules = reactive({
    phone: {
        rules: [
            { required: true, errorMessage: '请填写手机号码' },
            {
                pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                errorMessage: '请填写正确的手机号码',
            },
        ],
        validateTrigger: 'submit',
    },
    sms_code: {
        rules: [
            { required: true, errorMessage: '请填写验证码' },
        ],
        validateTrigger: 'submit',
    },
})
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
    const validate = await formRef.value?.validate()
    if (!validate) return

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
    const validate = await formRef.value?.validate()
    if (!validate) return

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
.uni-text {
    font-size: 13px;
    color: rgb(166, 5, 5);
    margin-left: 5px;
}
</style>
