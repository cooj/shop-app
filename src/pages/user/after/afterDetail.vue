<template>
    <view class="ml10px">
        <view class="mt10px">
            申请人：{{ defData.contacts }}
        </view>
        <view class="mt5px">
            申请人电话：{{ defData.phone }}
        </view>
        <view class="mt5px">
            地址：{{ defData.province + defData.city + defData.area + defData.address }}
        </view>
        <view class="mt5px">
            上门预约时间：{{ defData.ask_date }}
        </view>
        <view class="mt5px">
            上门工作人员：{{ defData?.accept_name ? defData?.accept_name : '接单中~' }}
        </view>
        <view class="mt5px">
            需求描述：{{ defData.describe }}
        </view>
    </view>
</template>

<script setup lang="ts">
import { AfterCenterApi } from '@/service'

const query = defineProps<{
    id?: string
}>()

const defData = reactive({
    detailList: [] as AfterCenterApi_detailResponse[],
    contacts: '',
    phone: '',
    email: '', //
    goods_type_txt: '', //
    describe: '',
    validate_code: '', //
    ask_date: '',
    provinceArr: [] as string[], // 省份列表 省、市、区
    address: '',
    des_img: '',
    des_vivo: '',
    province: '',
    city: '',
    area: '',
    accept_name: '',
})

const initDefaultData = async () => {
    const data: AfterCenterApi_detail = {
        id: Number(query.id),
    }
    const res = await AfterCenterApi.detail(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    defData.contacts = res.data.contacts
    defData.phone = res.data.phone
    defData.ask_date = res.data.ask_date
    defData.accept_name = res.data.accept_name
    defData.province = res.data.province
    defData.city = res.data.city
    defData.area = res.data.area
    defData.address = res.data.address
    defData.ask_date = res.data.ask_date
    defData.describe = res.data.describe
}
initDefaultData()
</script>

<style lang="scss" scoped></style>
