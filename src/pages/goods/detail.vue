<!-- 商品详情 -->
<template>
    <view>
        <uni-icons type="arrowleft" color="#666" size="18" />
        <!-- <view>
            <text class="uni-nav-bar-text">
                返回
            </text>
        </view> -->

        <view class="w100% pb100% relative">
            <image class="w100% h100% absolute translate-scale-110"
                src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" />
        </view>
        <view class="min-h20vh">
            详情
        </view>
        <uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick"
            @button-click="buttonClick" />
        <uni-goods-nav :options="options" @click="onClick" @button-click="buttonClick" />
    </view>
</template>

<script lang="ts" setup>
import { ApiGoods } from '@/service'

interface UniGoodsNavOption {
    index: number
    content: {
        icon: string
        text: string
    }
}

const defData = reactive({
    sn: '',
})

const options = ref([{
    icon: 'headphones',
    text: '客服',
},
{
    icon: 'star-filled',
    text: '收藏',
    // info: 2,
    // infoBackgroundColor: '#007aff',
    // infoColor: 'red',
},
{
    icon: 'cart',
    text: '购物车',
    info: 2,
}])

const buttonGroup = ref([{
    text: '加入购物车',
    backgroundColor: '#ff0000',
    color: '#fff',
},
{
    text: '立即购买',
    backgroundColor: '#ffa200',
    color: '#fff',
}])

const initGoodsData = async () => {
    if (!defData.sn) return

    const res = await ApiGoods.getInfo({ goods_sn: defData.sn })
    console.log(res)
}

const onClick = (e: UniGoodsNavOption) => {
    console.log(e)
    uni.showToast({
        title: `点击${e.content.text}`,
        icon: 'none',
    })
}
const buttonClick = (e: UniGoodsNavOption) => {
    console.log(e)
    // options.value[2].info = (options.value[2].info || 0) + 1

    // options.value[2].info++
}

onLoad((options) => {
    if (options?.id) defData.sn = options?.id
    initGoodsData()
})
</script>

<style lang="scss" scoped></style>
