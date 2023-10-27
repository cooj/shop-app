<template>
    <view class="content">
        <view class="flex justify-between bg-white h40px">
            <view class="coupon-title" @click="typeClick">
                <text :class="defData.type === 1 ? 'active' : ''">
                    优惠券
                </text>
            </view>
            <view class="coupon-title" @click="typeInClick">
                <text :class="defData.type === 2 ? 'active' : ''">
                    代金券
                </text>
            </view>
        </view>
        <view v-if="defData.type === 1">
            <uni-card :is-shadow="false">
                <view class="c-#d7231e">
                    <text class="text-25px">
                        ¥20
                    </text>
                    <text class="ml5px">
                        满100使用
                    </text>
                    <!-- <text class="">
                        全平台通用
                    </text> -->
                </view>
                <view class="text-12px">
                    限2023-7-25 10:00:00至2023-8-25 10:00:00内使用
                </view>
                <view class="text-12px">
                    活动结束时间：2023-8-25 10:00:00
                </view>
                <view class="flex justify-end">
                    <uni-tag v-if="defData.used === 1" class="w40px text-center" :circle="true" :inverted="true" text="领取"
                        type="primary" @click="usedClick" />
                    <uni-tag v-else class="w40px text-center" :circle="true" :inverted="true" text="已领取" />
                </view>
            </uni-card>
            <uni-card :is-shadow="false">
                <view class="c-#d7231e">
                    <text class="text-25px">
                        ¥50
                    </text>
                    <text class="ml5px">
                        满200使用
                    </text>
                </view>
                <view class="text-12px">
                    限2023-7-25 10:00:00至2023-8-25 10:00:00内使用
                </view>
                <view class="text-12px">
                    活动结束时间：2023-8-25 10:00:00
                </view>
                <view class="flex justify-end">
                    <uni-tag class="w40px text-center" :circle="true" :inverted="true" text="领取" type="primary" />
                </view>
            </uni-card>
            <uni-card :is-shadow="false">
                <view class="c-#d7231e">
                    <text class="text-25px">
                        ¥100
                    </text>
                    <text class="ml5px">
                        满500使用
                    </text>
                </view>
                <view class="text-12px">
                    限2023-7-25 10:00:00至2023-8-25 10:00:00内使用
                </view>
                <view class="text-12px">
                    活动结束时间：2023-8-25 10:00:00
                </view>
                <view class="flex justify-end">
                    <uni-tag class="w40px text-center" :circle="true" :inverted="true" text="领取" type="primary" />
                </view>
            </uni-card>
            <uni-card :is-shadow="false">
                <view class="c-#d7231e">
                    <text class="text-25px">
                        ¥20
                    </text>
                    <text class="ml5px">
                        满100使用
                    </text>
                </view>
                <view class="text-12px">
                    限2023-7-25 10:00:00至2023-8-25 10:00:00内使用
                </view>
                <view class="text-12px">
                    活动结束时间：2023-8-25 10:00:00
                </view>
                <view class="flex justify-end">
                    <uni-tag class="w40px text-center" :circle="true" :inverted="true" text="领取" type="primary" />
                </view>
            </uni-card>
            <uni-card :is-shadow="false">
                <view class="c-#d7231e">
                    <text class="text-25px">
                        ¥50
                    </text>
                    <text class="ml5px">
                        满100使用
                    </text>
                </view>
                <view class="text-12px">
                    限2023-7-25 10:00:00至2023-8-25 10:00:00内使用
                </view>
                <view class="text-12px">
                    活动结束时间：2023-8-25 10:00:00
                </view>
                <view class="flex justify-end">
                    <uni-tag class="w40px text-center" :circle="true" :inverted="true" text="领取" type="primary" />
                </view>
            </uni-card>
        </view>
        <view v-else>
            <view class="flex justify-center mt50px">
                <uni-tag text="扫描二维码领取代金券" type="error" />
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
const defData = reactive({
    loading: false,
    type: 1,
    none: 0,
    used: 1,
    // couponList: [] as UserCouponApi_getListResponse['lists'],
})
const typeClick = () => {
    defData.type = 1
    // initData()
}
const typeInClick = () => {
    defData.type = 2
    // initData()
}

const initData = async () => {
    // const data: UserCouponApi_getList = {
    //     type: defData.type as 1 | 2 | 3 | 4,
    // }
    // const res = await UserCouponApi.getList(data)
    // defData.couponList = res.data.lists
    // if (defData.couponList.length === 0) {
    //     defData.none = 1
    // } else {
    //     defData.none = 0
    // }
}

const usedClick = () => {
    defData.used = 0
    initData()
}

// 页面加载时
onMounted(() => {
    initData()
})
</script>

<style lang="scss" scoped>
.content {
    background-color: #f8f8f8;
}

.coupon-title {
    // color: #c86f6f;
    margin-top: 25rpx;
    text-align: center;
    width: 50%;
}

.active {
    color: #d7231e;
    border-bottom: 6rpx solid #d7231e;
}
</style>
