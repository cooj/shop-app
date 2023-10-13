<template>
    <view>
        <!-- <p class="shop-title">
            {{ defData.shop_title }}
        </p> -->
        <!-- <p v-html="defData.shop_describe" /> -->
        <p v-html="defData.agreement" />
        <p v-html="defData.policy" />
    </view>
</template>

<script setup lang="ts">
import { FitInfoApi } from '@/service'

const defData = reactive({
    shop_describe: '',
    shop_title: '',
    agreement: '',
    policy: '',
})

const initData = async () => {
    const res = await FitInfoApi.getList()
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.shop_describe = res.data.shop_describe
    defData.shop_title = res.data.shop_title
    defData.agreement = res.data.agreement
    defData.policy = res.data.policy
}
initData()
</script>

<style scoped>
.shop-title {
    text-align: center;
    font-size: 17px;
    /* font-weight: bold; */
    /* color: red; */
}
</style>
