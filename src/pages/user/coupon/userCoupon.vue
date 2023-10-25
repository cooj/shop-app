<template>
    <view>
        <view class="flex justify-between pl10px pr10px">
            <view class="coupon-title" @click="typeClick">
                <text :class="defData.is_status === 1 ? 'active' : ''">
                    可用优惠券
                </text>
            </view>
            <view class="coupon-title" @click="typeInClick">
                <text :class="defData.is_status === 3 ? 'active' : ''">
                    已用优惠券
                </text>
            </view>
            <view class="coupon-title" @click="typeOutClick">
                <text :class="defData.is_status === 4 ? 'active' : ''">
                    过期优惠券
                </text>
            </view>
        </view>

        <view v-for="item in defData.couponList" :key="item.coupon_id" :value="item.coupon_name">
            <view class="card">
                <view class="card-left">
                    <view class="c-#d7231e text-20px mt2">
                        ¥{{ item.par_value }}
                    </view>
                    <view class="text-15px">
                        {{ item.coupon_name }}
                    </view>
                </view>
                <view class="card-right">
                    <view class="mt1">
                        {{ item.type === 1 ? "通用券" : "品类券" }}
                    </view>
                    <view>活动：{{ item.coupon_name }}</view>
                    <view class="text-12px mt5px">
                        有效期：{{ item.start_time }}至{{ item.end_time }}
                    </view>
                </view>
            </view>
        </view>
        <view v-if="defData.none" class="text-center mt100px">
            <navigator url="/pages/user/coupon/couponCenter">
                <button>没有优惠券，去领取</button>
            </navigator>
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserCouponApi } from '@/service'

const defData = reactive({
    loading: false,
    is_status: 1,
    none: 0,
    couponList: [] as UserCouponApi_getListResponse['lists'],
})
const typeClick = () => {
    defData.is_status = 1
    initData()
}
const typeInClick = () => {
    defData.is_status = 3
    initData()
}
const typeOutClick = () => {
    defData.is_status = 4
    initData()
}

const initData = async () => {
    const data: UserCouponApi_getList = {
        is_status: defData.is_status as 1 | 2 | 3 | 4,
    }
    const res = await UserCouponApi.getList(data)
    defData.couponList = res.data.lists
    if (defData.couponList.length === 0) {
        defData.none = 1
    } else {
        defData.none = 0
    }
}

// 页面加载时
onMounted(() => {
    initData()
})
</script>

<style lang="scss" scoped>
.coupon-title {
    // color: #c86f6f;
    margin-top: 13rpx;
}

.active {
    color: #d7231e;
    border-bottom: 6rpx solid #d7231e;
}

.card {
    height: 75px;
    border: 1px solid #cecece;
    margin: 10px;
    display: flex;

}

.card-left {
    width: 100px;
    background-color: #cecece;
    text-align: center;
}

.card-right {
    font-size: 15px;
    margin-left: 20px;
}
</style>
