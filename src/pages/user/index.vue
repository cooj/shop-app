<template>
    <view>
        <view class="h-60 m2 flex justify-between">
            <view>
                <text>我的</text>
            </view>
            <view class="circle">
                <view class="flex justify-between ml2 mr2">
                    <uni-icons style="color: rgb(136, 136, 136);margin-top: 1px;" type="more-filled" size="22" /> |
                    <uni-icons style="color: rgb(136, 136, 136);margin-top: 1px;" type="smallcircle" size="22" />
                </view>
            </view>
        </view>

        <uni-list :border="false">
            <uni-list-item :title="defData.user_name" note="优惠券：0 张未使用" :thumb="defData.img" thumb-size="lg">
                <template #footer>
                    <view>
                        <view @click="fitRoute">
                            <svg t="1696902396110" class="w21px h21px" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1798" width="200" height="200">
                                <path d="M919.6 405.6l-57.2-8c-12.7-1.8-23-10.4-28-22.1-11.3-26.7-25.7-51.7-42.9-74.5-7.7-10.2-10-23.5-5.2-35.3l21.7-53.5c6.7-16.4 0.2-35.3-15.2-44.1L669.1 96.6c-15.4-8.9-34.9-5.1-45.8 8.9l-35.4 45.3c-7.9 10.2-20.7 14.9-33.5 13.3-14-1.8-28.3-2.8-42.8-2.8-14.5 0-28.8 1-42.8 2.8-12.8 1.6-25.6-3.1-33.5-13.3l-35.4-45.3c-10.9-14-30.4-17.8-45.8-8.9L230.4 168c-15.4 8.9-21.8 27.7-15.2 44.1l21.7 53.5c4.8 11.9 2.5 25.1-5.2 35.3-17.2 22.8-31.7 47.8-42.9 74.5-5 11.8-15.3 20.4-28 22.1l-57.2 8C86 408 72.9 423 72.9 440.8v142.9c0 17.7 13.1 32.7 30.6 35.2l57.2 8c12.7 1.8 23 10.4 28 22.1 11.3 26.7 25.7 51.7 42.9 74.5 7.7 10.2 10 23.5 5.2 35.3l-21.7 53.5c-6.7 16.4-0.2 35.3 15.2 44.1L354 927.8c15.4 8.9 34.9 5.1 45.8-8.9l35.4-45.3c7.9-10.2 20.7-14.9 33.5-13.3 14 1.8 28.3 2.8 42.8 2.8 14.5 0 28.8-1 42.8-2.8 12.8-1.6 25.6 3.1 33.5 13.3l35.4 45.3c10.9 14 30.4 17.8 45.8 8.9l123.7-71.4c15.4-8.9 21.8-27.7 15.2-44.1l-21.7-53.5c-4.8-11.8-2.5-25.1 5.2-35.3 17.2-22.8 31.7-47.8 42.9-74.5 5-11.8 15.3-20.4 28-22.1l57.2-8c17.6-2.5 30.6-17.5 30.6-35.2V440.8c0.2-17.8-12.9-32.8-30.5-35.2z m-408 245.5c-76.7 0-138.9-62.2-138.9-138.9s62.2-138.9 138.9-138.9 138.9 62.2 138.9 138.9-62.2 138.9-138.9 138.9z"
                                    fill="#d7231e" p-id="1799" />
                            </svg>
                        </view>
                        <view class="text-12px" @click="userCouponRoute">
                            查看>
                        </view>
                    </view>
                </template>
            </uni-list-item>
        </uni-list>

        <!-- 我的订单 -->
        <view>
            <uni-card title="我的订单" extra="全部>">
                <uni-grid :column="5" :show-border="false" :square="false">
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/待付款.png" mode="aspectFill" />
                            <text class="text">
                                待付款
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/待发货.png" mode="aspectFill" />
                            <text class="text">
                                待发货
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/待收货.png" mode="aspectFill" />
                            <text class="text">
                                待收货
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/已完成订单.png" mode="aspectFill" />
                            <text class="text">
                                已完成
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/无忧售后.png" mode="aspectFill" />
                            <text class="text">
                                售后
                            </text>
                        </view>
                    </uni-grid-item>
                </uni-grid>
            </uni-card>
        </view>

        <!-- 我的服务 -->
        <view>
            <uni-card title="我的服务" extra="客服>">
                <uni-grid :column="4" :show-border="false" :square="false">
                    <uni-grid-item @click="browsingRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/浏览历史.png" mode="aspectFill" />
                            <text class="text">
                                浏览历史
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="collectionRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/我的收藏.png" mode="aspectFill" />
                            <text class="text">
                                我的收藏
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/采购发票.png" mode="aspectFill" />
                            <text class="text">
                                发票抬头管理
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item>
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/发票.png" mode="aspectFill" />
                            <text class="text">
                                发票信息
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="addressRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/地址管理.png" mode="aspectFill" />
                            <text class="text">
                                地址管理
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="questionRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/问答社区.png" mode="aspectFill" />
                            <text class="text">
                                问答列表
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="peasRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/douban_F.png" mode="aspectFill" />
                            <text class="text">
                                我的工游豆
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="feedBackRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/留言.png" mode="aspectFill" />
                            <text class="text">
                                反馈/留言
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="afterCenterRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/无忧售后.png" mode="aspectFill" />
                            <text class="text">
                                售后中心
                            </text>
                        </view>
                    </uni-grid-item>
                    <uni-grid-item @click="recommendRoute">
                        <view class="grid-item-box">
                            <image class="image" src="/src/static/images/推荐.png" mode="aspectFill" />
                            <text class="text">
                                推荐管理
                            </text>
                        </view>
                    </uni-grid-item>
                </uni-grid>
            </uni-card>
        </view>
    </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'

const userStore = useUserStore()
const defData = reactive({
    user_name: '未登录',
    img: '/src/static/images/logo1.png',
})

const initData = async () => {
    const res = await userStore.getUserInfo()
    if (res.value) {
        defData.user_name = res.value.user_name
        defData.img = res.value.headimgurl
    }
}
initData()
const fitRoute = () => {
    uni.navigateTo({
        url: '/pages/fit/index',
    })
}
const collectionRoute = () => {
    uni.navigateTo({
        url: './collection/userCollection',
    })
}
const browsingRoute = () => {
    uni.navigateTo({
        url: './browsing/userBrowsing',
    })
}
const peasRoute = () => {
    uni.navigateTo({
        url: './peas/userPeas',
    })
}

const addressRoute = () => {
    uni.navigateTo({
        url: '/pages/user/address/userAddress',
    })
}
const afterCenterRoute = () => {
    uni.navigateTo({
        url: '/pages/user/after/afterCenter',
    })
}

const questionRoute = () => {
    uni.navigateTo({
        url: '/pages/user/question/userQuestion',
    })
}
const feedBackRoute = () => {
    uni.navigateTo({
        url: '/pages/user/feedback/feedBackList',
    })
}

const userCouponRoute = () => {
    uni.navigateTo({
        url: '/pages/user/coupon/userCoupon',
    })
}

const recommendRoute = () => {
    uni.navigateTo({
        url: '/pages/user/recommend/userRecommend',
    })
}
// 页面加载时
// onMounted(() => {
//     initData()
// })
</script>

<style lang="scss" scoped>
.circle {
    width: 160rpx;
    height: 27px;
    color: rgb(203, 202, 202);
    border: 1.5px solid rgb(203, 202, 202);
    border-radius: 30px;
}

/**uni-grid */
.grid-item-box {
    flex: 1;
    // position: relative;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
}

.grid-item-box-row {
    flex: 1;
    // position: relative;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
}

.image {
    width: 25px;
    height: 25px;
}

.text {
    font-size: 14px;
    margin-top: 5px;
}
</style>
