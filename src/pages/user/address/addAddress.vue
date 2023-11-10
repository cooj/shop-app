<template>
    <view>
        <view>
            <uni-forms ref="formRef" border :rules="rules" :model-value="form">
                <uni-forms-item name="contacts">
                    <uni-easyinput v-model="form.contacts" :input-border="false" placeholder="姓名：" />
                </uni-forms-item>
                <uni-forms-item name="phone">
                    <uni-easyinput v-model="form.phone" :input-border="false" placeholder="电话：" />
                </uni-forms-item>
                <uni-forms-item name="email">
                    <uni-easyinput v-model="form.email" :input-border="false" placeholder="邮箱：" />
                </uni-forms-item>
                <uni-forms-item name="province">
                    <uni-data-picker v-model="form.provinceArr" :border="false" :clear-icon="false"
                        :localdata="defData.addressList" :map="{ text: 'cityName', value: 'cityName' }" placeholder="请选择地址" popup-title="请选择所在地区"
                        @change="onchange" />
                </uni-forms-item>
                <uni-forms-item name="address">
                    <uni-easyinput v-model="form.address" :input-border="false" placeholder="详细地址：" />
                </uni-forms-item>
                <uni-forms-item label-width="10px">
                    <uni-data-checkbox v-model="form.bill_address" :localdata="form.is_bill_address" />
                </uni-forms-item>
                <uni-forms-item label-width="10px">
                    <uni-data-checkbox v-model="form.default" :localdata="form.is_default" />
                </uni-forms-item>
            </uni-forms>
        </view>

        <view class="bottom-button">
            <button type="warn" @click="addClick">
                确定
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserAddressApi } from '@/service'

const formRef = ref<UniHelper.UniForms>()

const defData = reactive({
    addressList: [] as UserAddressApi_GetAllRegionItem[],

})
const rules = reactive({
})
const form = reactive({
    contacts: '', //
    phone: '',
    email: '', //
    provinceArr: [] as string[], // 省份列表 省、市、区
    province: '',
    city: '',
    area: '',
    address: '',
    bill_address: 0,
    default: 0,
    is_bill_address: [{
        text: '设为默认发票地址',
        value: 1,
    },
    {
        text: '否',
        value: 0,
    }],
    is_default: [{
        text: '设为默认地址',
        value: 1,
    },
    {
        text: '否',
        value: 0,
    }],
})

const initDefaultData = async () => {
    const res = await UserAddressApi.getAllRegion()
    if (res.code === 200) {
        defData.addressList = res.data
    } else {
        showErrorModal(res.msg) // 提示信息或页面加载不当会引发任何内容。
    }
}
initDefaultData()

const onchange = (e: any) => {
    if (e.detail.value.length === 3) {
        form.province = e.detail.value[0].text
        form.city = e.detail.value[1].text
        form.area = e.detail.value[2].text
    } else {
        form.province = e.detail.value[0].text
        form.city = e.detail.value[1].text
        form.area = ''
    }
}

const addClick = async () => {
    const data: UserAddressApi_add = {
        contacts: form.contacts,
        phone: form.phone,
        email: form.email,
        address: form.address,
        is_bill_address: form.bill_address as 0 | 1,
        is_default: form.default as 0 | 1,
        province: form.province,
        city: form.city,
        area: form.area,
    }
    const res = await UserAddressApi.add(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    showToast({
        title: '添加地址成功',
    })
    uni.navigateTo({
        url: '/pages/user/address/userAddress',
    })
}
</script>

<style lang="scss" scoped>
.bottom-button {
    width: 100%;
    position: fixed;
    bottom: 0;
}
</style>
