<template>
    <view>
        <view class="w100% h80 bg-#cecece flex">
            <view class="ml1">
                <svg t="1695893069690" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="6406" data-spm-anchor-id="a313x.search_index.0.i16.7d543a81ZUaJVp" width="40" height="40">
                    <path d="M525.056 400c9.130667 50.389333 35.669333 82.346667 81.749333 99.242667 5.76 2.133333 8.917333 8.362667 7.125334 14.293333l-10.368 34.56a16.042667 16.042667 0 0 1-21.034667 10.410667c-68.821333-26.026667-110.165333-78.890667-121.685333-154.794667a16 16 0 0 1 14.336-18.304l27.434666-2.474667a20.906667 20.906667 0 0 1 22.442667 17.066667zM412.501333 224C276.522667 224 213.333333 308.48 213.333333 482.218667c0 133.248 95.573333 281.088 267.093334 309.248 150.997333 24.746667 250.88-2.389333 305.365333-109.653334 54.357333-106.965333 14.805333-195.797333-76.288-228.266666l-4.949333-1.706667c-45.738667-15.018667-82.346667-52.010667-103.168-99.114667l-2.56-5.973333C565.632 264.96 515.712 224 412.544 224z m0 64c72.32 0 101.205333 22.016 125.013334 77.866667l2.048 4.992c26.026667 64 74.624 116.096 138.197333 139.392l6.826667 2.389333c58.581333 19.2 81.066667 67.541333 44.16 140.202667-38.912 76.544-111.36 96.213333-237.909334 75.434666-136.618667-22.4-213.504-141.312-213.504-246.058666 0-141.738667 39.253333-194.218667 135.168-194.218667z"
                        fill="#f95216" p-id="6407" />
                </svg>
            </view>
            <view class="mt2">
                我的工游豆 <span style="color: #f95216;">2598</span>
            </view>
        </view>
        <scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="defData.scrollIntoIndex">
            <view v-for="(item, i) in defData.peasList" :id="`classify${i}`" :key="i" class="scroll-item"
                @tap="changIndex(i)">
                <text :class="defData.peasIndex === i ? 'active' : ''">
                    {{ item.name }}
                </text>
            </view>
        </scroll-view>
        <table v-if="defData.peasIndex === 0" class="peasTable">
            <tr>
                <td>订单S2024354573485349534消费抵扣的工游豆</td>
                <td>-200</td>
            </tr>
            <tr>
                <td>订单S2024354573485349534赠送的工游豆</td>
                <td>+500</td>
            </tr>
            <tr>
                <td>会员注册赠送</td>
                <td>+1000</td>
            </tr>
        </table>
        <table v-else class="peasTable">
            <tr>
                <td>会员注册赠送</td>
                <td>+1000</td>
            </tr>
            <tr>
                <td>订单S2024354573485349534赠送的工游豆</td>
                <td>+500</td>
            </tr>
            <tr>
                <td>订单S2024354573111149534赠送的工游豆</td>
                <td>+1500</td>
            </tr>
        </table>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const defData = reactive({
    peasIndex: 0, // 自定义工游豆名称 选中的下标值
    scrollIntoIndex: 'classify0', // 页面刷新时自定义工游豆名称顶部默认索引值
    wh: 0, // 当前设备可用高度
    peasList: [
        {
            name: '工游豆收支明细',
        },
        {
            name: '即将过期工游豆明细',
        },
    ],
})
const changIndex = (i: any) => {
    defData.peasIndex = i
    defData.scrollIntoIndex = `classify${i}`
    console.log('i :>> ', i)
    console.log('defData.scrollIntoIndex >> ', defData.scrollIntoIndex)
}
</script>

<style scoped>
.scroll-content {
    width: 100%;
    height: 80rpx;
    white-space: nowrap;
}

.scroll-item {
    display: inline-block;
    padding: 10rpx 30rpx;
    font-size: 32rpx;
}

.active {
    border-bottom: 2rpx solid #f95216;
    color: #f95216;
}

/* 表格 */
td{
    width: 100%;
    font-size: 14px;
    height: 30px;
}
</style>
