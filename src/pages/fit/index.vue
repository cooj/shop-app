<template>
    <view class="uni-container">
        <!-- <uni-list>
            <uni-list-item title="密码" right-text="******>" />
            <uni-list-item title="手机号" :right-text="userStore.user?.phone" />
            <uni-list-item title="微信绑定" right-text="右侧文字" />
            <uni-list-item title="关于工游记" right-text=">" />
        </uni-list> -->
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
                    {{ userStore.user?.phone }}>
                </navigator>
            </view>
        </view>
        <view class="uni-panel">
            <view class="uni-panel-h">
                <text class="uni-panel-text">
                    微信绑定
                </text>
                <switch checked color="#00e166" @change="delWeChat" />
            </view>
        </view>
        <view class="uni-panel">
            <view class="uni-panel-h">
                <text class="uni-panel-text">
                    关于工游记
                </text>
                <navigator url="/pages/fit/fitInfo">
                    >
                </navigator>
            </view>
        </view>
        <view class="uni-panel mt150rpx">
            <view class="uni-panel-h">
                <text class="uni-panel-text flex justify-center" @click="loginRoute">
                    退出登录
                </text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { FitWeChatApi } from '@/service'
import { useUserStore } from '@/store'

const userStore = useUserStore()
const defData = reactive({
    wh: 0, // 当前设备可用高度
    switch: true,
})
//  退出登录
const loginRoute = () => {
    uni.navigateTo({
        url: '/pages/login/index',
    })
}
// 解绑微信
const delWeChat = () => {
    uni.showModal({
        title: '此操作将解绑微信，是否继续?',
        success: (res) => {
            if (res.confirm) {
                WeChatApi()
                uni.navigateTo({
                    url: '/pages/login/index',
                })
            }
        },

    })
}

const WeChatApi = async () => {
    const res = await FitWeChatApi.del()
    if (res.code !== 200) return showErrorModal(res.msg)
}

// 页面加载时
onMounted(async () => {
    // const sysInfo = uni.getSystemInfoSync()
    // defData.wh = sysInfo.windowHeight
    // console.log('defData.wh :>> ', defData.wh)
    await userStore.getUserInfo()
    console.log('s :>> ', userStore.user)
})
</script>

<style lang="scss" scoped>
.uni-container {
    padding: 15px 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
