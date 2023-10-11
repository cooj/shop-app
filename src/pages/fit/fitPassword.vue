<template>
    <view class="uni-input-wrapper">
        <input v-model="form.password" class="uni-input" placeholder="请输入当前密码" :password="defData.showPassword">
        <!-- <text class="uni-icon" :class="[!defData.showPassword ? 'uni-eye-active' : '']"
            @click="defData.showPassword = !defData.showPassword">
            &#xe568;
        </text> -->
    </view>
    <view class="uni-input-wrapper">
        <input v-model="form.define_password" class="uni-input" placeholder="请输入新密码" :password="defData.showPassword">
    </view>
    <view class="uni-input-wrapper">
        <input v-model="form.confirm_password" class="uni-input" placeholder="再次输入新密码" :password="defData.showPassword">
    </view>
    <view class="mt50rpx">
        <button type="warn" @click="onClick">
            确定
        </button>
    </view>
</template>

<script setup lang="ts">
import { FitPasswordApi } from '@/service'

const defData = reactive({
    showPassword: true,
})

const form = reactive({
    password: '', // 旧密码
    define_password: '',
    confirm_password: '', // 新密码
})

const onClick = async () => {
    if (!form.password) return showErrorModal('请输入当前密码')
    if (!form.define_password) return showErrorModal('请输入新密码')
    if (!form.confirm_password) return showErrorModal('请输入再次输入新密码')
    if (form.define_password !== form.confirm_password) return showErrorModal('新密码输入不一致,请重新输入')
    const data: FitPasswordApi_edit = {
        password: form.password,
        confirm_password: form.confirm_password,
    }
    const res = await FitPasswordApi.edit(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    uni.showModal({ title: '修改密码成功', showCancel: false })
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

.uni-icon {
    font-family: uniicons;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    width: 24px;
    height: 24px;
    line-height: 24px;
    color: #999999;
}

.uni-eye-active {
    color: #007AFF;
}
</style>
