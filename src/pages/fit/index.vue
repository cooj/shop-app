<template>
    <view class="uni-container">
        <view class="uni-panel">
            <view class="uni-panel-h">
                <text class="uni-panel-text">
                    密码
                </text>
                <navigator url="/pages/fit/fitPassword">
                    ******>
                </navigator>
            </view>
        </view>
        <view class="uni-panel">
            <view class="uni-panel-h">
                <text class="uni-panel-text">
                    手机号
                </text>
                <navigator url="/pages/fit/fitPhone">
                    16666666666>
                </navigator>
            </view>
        </view>
        <view class="uni-panel">
            <view class="uni-panel-h">
                <text class="uni-panel-text">
                    微信绑定
                </text>
                <switch checked color="#00e166" />
            </view>
        </view>
        <view class="uni-panel">
            <view class="uni-panel-h">
                <text class="uni-panel-text">
                    关于工游记
                </text>
                <text>
                    >
                </text>
            </view>
        </view>
        <view class="uni-panel mt150rpx">
            <view class="uni-panel-h">
                <text class="uni-panel-text flex justify-center">
                    退出登录
                </text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { uni } from '@dcloudio/uni-h5'
import { onMounted, reactive } from 'vue'

const defData = reactive({
    wh: 0, // 当前设备可用高度
    hideList: [
        'load-more',
    ],
    lists: [
        {
            name: '密码',
            url: 'badge',
        },
        {
            name: '手机号',
            url: 'breadcrumb',
        },
        {
            name: '微信绑定',
            url: 'card',
        },
        {
            name: '关于工游记',
            url: 'collapse',
        },
        {
            name: '',
            url: 'collapse',
        },
    ],
})

// 页面加载时
onMounted(() => {
    const sysInfo = uni.getSystemInfoSync()
    defData.wh = sysInfo.windowHeight
    console.log('defData.wh :>> ', defData.wh)
})
</script>

<style lang="scss" scoped>
.uni-container {
    padding: 15px 0;
    background-color: #f8f8f8;
}

.uni-panel {
    margin-bottom: 12px;
}

.uni-panel-h {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    background-color: #ffffff;
    flex-direction: row !important;
    /* justify-content: space-between !important; */
    align-items: center !important;
    padding: 12px;
    /* #ifdef H5 */
    cursor: pointer;
    /* #endif */
}

.uni-panel-h:active {
    background-color: #f8f8f8;
}

.uni-panel-h-on {
    background-color: #f0f0f0;
}

.uni-panel-text {
    flex: 1;
    color: #000000;
    font-size: 14px;
    font-weight: normal;
}

.uni-panel-icon {
    margin-left: 15px;
    color: #999999;
    font-size: 14px;
    font-weight: normal;
    transform: rotate(0deg);
    transition-duration: 0s;
    transition-property: transform;
}

.uni-panel-icon-on {
    transform: rotate(180deg);
}

.uni-icon {
    font-family: uniicons;
    font-weight: normal;
}
</style>
