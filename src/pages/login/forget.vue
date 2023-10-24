<template>
    <view class="p15px">
        <uni-forms ref="formRef" :rules="rules" :model-value="form">
            <uni-forms-item v-if="defData.step === 1" label="" name="phone">
                <uni-easyinput v-model="form.phone" placeholder="请输入当前手机号" />
            </uni-forms-item>
            <uni-forms-item v-else label="" name="define_password">
                <uni-easyinput v-model="form.define_password" type="password" placeholder="请输入新密码" />
            </uni-forms-item>
            <uni-forms-item v-if="defData.step === 1" label="" name="sms_code">
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
            <uni-forms-item v-else label="" name="confirm_password">
                <uni-easyinput v-model="form.confirm_password" type="password" placeholder="再次输入新密码" />
            </uni-forms-item>
        </uni-forms>
        <button v-if="defData.step === 1" type="warn" @click="NextStep">
            下一步
        </button>
        <button v-else type="warn" @click="onClick()">
            提交
        </button>
    </view>
</template>

<script setup lang="ts">
import { ApiCommon, FitPhoneApi, ForgetPasswordApi } from '@/service'

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
    define_password: {
        rules: [
            { required: true, errorMessage: '请填写新密码' },
        ],
        validateTrigger: 'submit',
    },
    confirm_password: {
        rules: [
            { required: true, errorMessage: '请填写新密码' },
        ],
        validateTrigger: 'submit',
    },
})
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
    const validate = await formRef.value?.validate()
    if (!validate) return
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
    const validate = await formRef.value?.validate()
    if (!validate) return
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
.uni-text {
    font-size: 13px;
    color: rgb(166, 5, 5);
    margin-left: 5px;
}
</style>
