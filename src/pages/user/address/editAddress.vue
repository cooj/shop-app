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
                        :localdata="defData.addressList" :map="{ text: 'cityName', value: 'cityName' }" popup-title="请选择所在地区"
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
            <button type="warn" @click="editClick">
                确定
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserAddressApi } from '@/service'

const query = defineProps<{
    id?: string
}>()

const formRef = ref<UniHelper.UniForms>()

const defData = reactive({
    addressList: [] as UserAddressApi_GetAllRegionItem[],
})
const rules = reactive({
})
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

const initAddressData = async () => {
    const res = await UserAddressApi.getAllRegion()
    if (res.code === 200) {
        defData.addressList = res.data
    } else {
        showErrorModal(res.msg) // 提示信息或页面加载不当会引发任何内容。
    }
}
initAddressData()

const initDefaultData = async () => {
    const data: UserAddressApi_getList = {
        address_id: Number(query.id),
    }
    const res = await UserAddressApi.getList(data)
    if (res.code !== 200) return showErrorModal(res.msg) // 提示信息或页面加载不当会引发任何内容。
    form.contacts = res.data[0].contacts
    form.phone = res.data[0].phone
    form.email = res.data[0].email
    form.address = res.data[0].address
    form.provinceArr = [res.data[0].province, res.data[0].city, res.data[0].area]
    form.province = res.data[0].province
    form.city = res.data[0].city
    form.area = res.data[0].area
    form.bill_address = res.data[0].is_bill_address
    form.default = res.data[0].is_default
}
initDefaultData()

const editClick = async () => {
    const data: UserAddressApi_edit = {
        address_id: Number(query.id),
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
    const res = await UserAddressApi.edit(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    showToast({
        title: '修改地址成功',
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
