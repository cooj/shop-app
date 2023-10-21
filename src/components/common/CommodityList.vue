<template>
    <view class="commodity-list">
        <!-- 商品列表组件 -->
        <Commodity :data="defData.commodityList" />
    </view>
</template>

<script setup lang="ts">
import Commodity from './Commodity.vue'

const defData = reactive({
    commodityList: [
        {
            id: 1,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343165243.jpg?x-oss-process=image/quality,Q_50',
            name: '红钐 按键寿命试验机 HSL-TA4 四工位',
            price: '¥299/件',
        },
        {
            id: 2,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343168635.jpg?x-oss-process=image/quality,Q_50',
            name: '艾斯瑞 按键寿命试验机 LX-5617 四工位',
            price: '¥799/件',
        },
        {
            id: 3,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343166742.jpg?x-oss-process=image/quality,Q_50',
            name: '红钐 按键寿命试验机 HSL-TA4 四工位',
            price: '¥299/件',
        },
        {
            id: 4,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343165243.jpg?x-oss-process=image/quality,Q_50',
            name: '红钐 按键寿命试验机 HSL-TA4 四工位',
            price: '¥299/件',
        },
        {
            id: 5,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343168635.jpg?x-oss-process=image/quality,Q_50',
            name: '红钐 按键寿命试验机 HSL-TA4 四工位',
            price: '¥299/件',
        },
        {
            id: 6,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343166742.jpg?x-oss-process=image/quality,Q_50',
            name: '红钐 按键寿命试验机 HSL-TA4 四工位',
            price: '¥299/件',
        },
        {
            id: 7,
            imgUrl: 'https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343165243.jpg?x-oss-process=image/quality,Q_50',
            name: '红钐 按键寿命试验机 HSL-TA4 四工位',
            price: '¥299/件',
        },
    ],
})
</script>

<style scoped></style>
