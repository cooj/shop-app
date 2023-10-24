<template>
    <view class="p15px">
        <uni-forms ref="formRef" :rules="rules" :model-value="form">
            <uni-forms-item name="password">
                <uni-easyinput v-model="form.password" type="password" placeholder="请输入当前密码" />
            </uni-forms-item>
            <uni-forms-item name="define_password">
                <uni-easyinput v-model="form.define_password" type="password" placeholder="请输入新密码" />
            </uni-forms-item>
            <uni-forms-item name="confirm_password">
                <uni-easyinput v-model="form.confirm_password" type="password" placeholder="再次输入新密码" />
            </uni-forms-item>
        </uni-forms>
        <button type="warn" @click="onClick()">
            确定
        </button>
    </view>
</template>

<script setup lang="ts">
import { FitPasswordApi } from '@/service'

const formRef = ref<UniHelper.UniForms>()

const rules = reactive({
    password: {
        rules: [
            { required: true, errorMessage: '请填写当前密码' },
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
const form = reactive({
    password: '', // 旧密码
    define_password: '',
    confirm_password: '', // 新密码
})

const onClick = async () => {
    const validate = await formRef.value?.validate()
    if (!validate) return

    if (form.define_password !== form.confirm_password) return showErrorModal('新密码输入不一致,请重新输入')
    const data: FitPasswordApi_edit = {
        password: form.password,
        confirm_password: form.confirm_password,
    }
    const res = await FitPasswordApi.edit(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    uni.showModal({ title: '修改密码成功', showCancel: false })
    uni.navigateTo({
        url: '/pages/fit/index',
    })
}
</script>

<style lang="scss" scoped></style>
