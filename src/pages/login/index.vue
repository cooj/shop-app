<template>
    <view>用户登录</view>
</template>

<script lang="ts" setup>
import { ApiCommon } from '@/service'

/**
 * 获取验证码
 */
const getCode = async () => {
    const res = await ApiCommon.sendCode({ phone: '18126053235', type: 1 })
    console.log(res)
}
onLoad(() => {
    getCode()
})
</script>

<style lang="scss" scoped></style>
