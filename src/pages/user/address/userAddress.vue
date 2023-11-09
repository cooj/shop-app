<template>
    <view class="page">
        <!-- <view class="flex justify-between bg-white h40px">
            <view class="address-title" @click="typeClick">
                <text :class="defData.type === 0 ? 'active' : ''">
                    收货地址
                </text>
            </view>
            <view class="address-title" @click="typeInClick">
                <text :class="defData.type === 1 ? 'active' : ''">
                    收票地址
                </text>
            </view>
        </view> -->
        <view>
            <uni-card v-for="item in defData.addressList" :key="item.address_id" :is-shadow="false">
                <view class="text-17px flex justify-between">
                    <view>
                        <text>
                            {{ item.contacts }}
                        </text>
                        <text class="ml5px">
                            {{ item.phone }}
                        </text>
                    </view>
                    <view>
                        <uni-icons type="compose" size="20" @click="EditClick(item.address_id)" />
                        <uni-icons class="ml10px" type="trash" size="20" @click="delClick(item.address_id)" />
                    </view>
                </view>
                <view class="text-15px mt2">
                    {{ item.province + item.city + item.area + item.address }}
                </view>
                <view class="flex">
                    <view v-if="item.is_default" class="c-#d7231e">
                        <uni-icons style="color: #d7231e;" type="checkbox-filled" size="20" />
                        默认收货
                    </view>
                    <view v-if="item.is_bill_address" class="c-#d7231e">
                        <uni-icons style="color: #d7231e;" type="checkbox-filled" size="20" />
                        发票地址
                    </view>
                </view>
            </uni-card>
        </view>
        <view class="bottom-button">
            <button type="warn" @click="AddClick">
                新增地址
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserAddressApi } from '@/service'

const defData = reactive({
    loading: false,
    type: 0,
    none: 0,
    used: 1,
    addressList: [] as UserAddressApi_getListResponse[],
})
// const typeClick = () => {
//     defData.type = 0
//     initData()
// }
// const typeInClick = () => {
//     defData.type = 1
//     initData()
// }

const initData = async () => {
    const data: UserAddressApi_getList = {
        // is_bill_address: defData.type === 0 ? '0' : '1',
    }
    const res = await UserAddressApi.getList(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.addressList = res.data
}

const AddClick = async () => {
    uni.navigateTo({
        url: '/pages/user/address/addAddress',
    })
}
const EditClick = async (row: any) => {
    uni.navigateTo({
        url: `/pages/user/address/editAddress?id=${row}`,
    })
}
// 删除
const delClick = async (row: any) => {
    const res = await UserAddressApi.del({ address_id: row })
    if (res.code !== 200) return showErrorModal(res.msg)
    initData()
}

// 页面加载时
onMounted(() => {
    initData()
})
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

.address-title {
    // color: #c86f6f;
    margin-top: 25rpx;
    text-align: center;
    width: 50%;
}

.active {
    color: #d7231e;
    border-bottom: 6rpx solid #d7231e;
}

.bottom-button {
    width: 100%;
    position: fixed;
    bottom: 0;
}
</style>
