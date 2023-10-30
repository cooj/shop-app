<template>
    <view class="record-data">
        <view v-for="(item, index) in defData.lists" :key="index" class="w100%">
            <view class="goods-list">
                <view v-for="(value, idx) in 1" :key="idx" class="list">
                    <view class="thumb">
                        <image class="thumb-image" :src="item.goods_img" mode="" />
                    </view>
                    <view class="item">
                        <view class="title">
                            <text class="text-27">
                                {{ item.goods_name }}
                            </text>
                        </view>
                        <view class="goods-btn">
                            <view class="price">
                                ￥{{ item.shop_price }}/件
                            </view>
                            <view class="cart" @click="delClick(item.goods_id)">
                                <uni-icons type="trash-filled" size="30" />
                            </view>
                        </view>
                        <view>
                            <!-- <view class="text-25">
                                {{ item.recent_time }}
                            </view> -->
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserCollectionApi } from '@/service'

const defData = reactive({
    lists: [] as UserCollectionApi_getListResponse['lists'],
})

const initData = async () => {
    const data: UserCollectionApi_getList = {
        type: 2,
        is_paging: 0,
    }
    const res = await UserCollectionApi.getList(data)
    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }
    defData.lists = res.data.lists
}
initData()

// 取消浏览记录
const delClick = async (row: any) => {
    const data: UserCollectionApi_del = {
        goods_ids: row,
        type: 2,
    }
    const res = await UserCollectionApi.del(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    initData()
}
</script>

<style lang="scss" scoped>
.page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
}

.record-data {
    width: 100%;
    /* margin-top: 20rpx; */
    background-color: #f8f8f8;
    padding-bottom: 80rpx;
}

.list {
    display: flex;
    align-items: center;
    height: 180rpx;
    margin: 20rpx;
    background: #ffffff;
    border-radius: 10rpx;

}

.thumb {
    width: 28%;
    height: 150rpx;
    /* background-color: #cb4f4f; */
}

.thumb-image {
    width: 150rpx;
    height: 150rpx;
    /* border-radius: 10rpx; */
    margin-left: 10rpx;
}

.item {
    width: 60%;
    height: 100%;
    border-bottom: 2rpx solid #f6f6f6;
}

.title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 90rpx;
    /* background: #000; */

    /* text {
        font-size: 26rpx;
        color: #222222;
    } */
}

.goods-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background: #c98282; */
}

.price {
    display: flex;
    align-items: center;
}

.cart {
    display: flex;
    align-items: center;
}
</style>
