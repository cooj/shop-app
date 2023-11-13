<template>
    <view>
        <view class="flex justify-between bg-white h50px">
            <view class="coupon-title" @click="typeClick">
                <text :class="defData.type === 1 ? 'active' : ''">
                    安装申请
                </text>
            </view>
            <view class="coupon-title" @click="typeInClick">
                <text :class="defData.type === 2 ? 'active' : ''">
                    维修申请
                </text>
            </view>
        </view>

        <view>
            <uni-forms ref="formRef" :rules="rules" :model-value="form" label-width="103px" class="ml3 mr3">
                <uni-forms-item name="contacts" label="联系人：" required>
                    <uni-easyinput v-model="form.contacts" />
                </uni-forms-item>
                <uni-forms-item name="provinceArr" label="地址：" required>
                    <uni-data-picker v-model="form.provinceArr" :clear-icon="false" :localdata="defData.addressList"
                        :map="{ text: 'cityName', value: 'cityName' }" placeholder="请选择地址" popup-title="请选择所在地区"
                        @change="onchange" />
                </uni-forms-item>
                <uni-forms-item name="address" label="详细地址：" required>
                    <uni-easyinput v-model="form.address" />
                </uni-forms-item>
                <uni-forms-item name="goods_type_txt" label="商品关键字：" required>
                    <uni-easyinput v-model="form.goods_type_txt" disable type="text" prefix-icon="search"
                        placeholder="请输入商品关键字" @iconClick="inputClick" />
                    <uni-table v-if="defData.goodsSearchList.length > 0" border style="max-height: 200px;">
                        <uni-tr v-for="(item, index) in defData.goodsSearchList" :key="index">
                            <uni-td @click="selectClick(item)">
                                {{ item.goods_name }}
                            </uni-td>
                        </uni-tr>
                    </uni-table>
                </uni-forms-item>
                <uni-forms-item name="describe" label="需求描述：" required>
                    <uni-easyinput v-model="form.describe" type="textarea" />
                </uni-forms-item>
                <uni-forms-item v-if="defData.type === 2" name="des_img" label="上传图片：" required>
                    <uni-file-picker v-model="form.des_img" mode="grid" file-mediatype="image" file-extname="png,jpg"
                        :limit="9" @success="success" @progress="progress" @fail="fail" />
                </uni-forms-item>
                <uni-forms-item v-if="defData.type === 2" name="des_vivo" label="上传视频：" required>
                    <uni-file-picker v-model="form.des_vivo" file-mediatype="video" />
                </uni-forms-item>
                <uni-forms-item name="phone" label="手机号：" required>
                    <uni-easyinput v-model="form.phone" />
                </uni-forms-item>
                <uni-forms-item label="验证码：" name="validate_code" required>
                    <view class="flex">
                        <uni-easyinput v-model="form.validate_code" placeholder="请输入短信验证码" />
                        <button v-if="defData.send.visible" type="warn" plain class="uni-text">
                            {{ defData.send.text }}
                        </button>
                        <button v-else plain class="uni-text" @click="getCode">
                            获取验证码
                        </button>
                    </view>
                </uni-forms-item>
                <uni-forms-item name="ask_date" label="预约上门时间" required>
                    <uni-datetime-picker v-model="form.ask_date" type="datetime" />
                </uni-forms-item>
            </uni-forms>
            <view class="h100px" />
        </view>

        <view class="bottom-button">
            <button type="warn" @click="addClick">
                确定
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { AfterCenterApi, ApiCommon, UserAddressApi } from '@/service'

const formRef = ref<UniHelper.UniForms>()

const defData = reactive({
    addressList: [] as UserAddressApi_GetAllRegionItem[],
    goodsSearchList: [] as AfterCenterApi_SearchResponse['list'],
    goodsList: [] as AfterCenterApi_SearchResponse['list'],

    type: 1,
    pcode: 0,
    send: {
        time: 0,
        visible: false,
        text: '',
    },
    options: [
        {
            value: '111',
            label: '1',
        },
        {
            value: '2222',
            label: '2',
        },
        {
            value: '333',
            label: '3',
        },
    ],
})
const rules = reactive({
    contacts: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
    phone: {
        rules: [
            { required: true, errorMessage: '请填写手机号码' },
            {
                pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                errorMessage: '请填写正确的手机号码',
            },
        ],
        validateTrigger: 'submit',
    },
    validate_code: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
    email: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
    goods_type_txt: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
    describe: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
    address: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
    ask_date: {
        rules: [
            { required: true, errorMessage: '必填' },
        ],
        validateTrigger: 'submit',
    },
})
const form = reactive({
    contacts: '', //
    phone: '',
    email: '', //
    goods_type_txt: '', //
    describe: '',
    validate_code: '', //
    ask_date: '',
    provinceArr: [] as string[], // 省份列表 省、市、区
    province: '',
    city: '',
    area: '',
    address: '',
    des_img: [],
    des_vivo: [],
    goods_name: '',
    cat_id: 0,
    cat_name: '',
    goods_code: '',

})
const typeClick = () => {
    defData.type = 1
    initDefaultData()
}
const typeInClick = () => {
    defData.type = 2
    initDefaultData()
}

const progress = (e: any) => {
    console.log('上传成功')
}
const success = (e: any) => {
    console.log('上传进度：', e)
}
const fail = (e: any) => {
    console.log('上传失败：', e)
}

const inputClick = async () => {
    console.log('form.goods_type_txt :>> ', form.goods_type_txt)

    const goods: AfterCenterApi_Search = {
        keyword: form.goods_type_txt,
    }
    const res = await AfterCenterApi.search(goods)
    if (res.code === 200) {
        if (res.data.list.length > 0) {
            defData.goodsSearchList = res.data.list
            // console.log('defData.goodsSearchList :>> ', defData.goodsSearchList)
        }
        // defData.goodsList = res.data.list
        // console.log('defData.goodsList :>> ', defData.goodsList)
    } else {
        // defData.goodsSearchList = []
    }
}

const selectClick = (row: any) => {
    console.log('row :>> ', row)
    form.goods_type_txt = row.goods_name
    form.cat_id = row.cat_id
    form.cat_name = row.cat_name
    form.goods_code = row.goods_code
    defData.goodsSearchList = []
}

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

const initDefaultData = async () => {
    const res = await UserAddressApi.getAllRegion()
    if (res.code === 200) {
        defData.addressList = res.data
    } else {
        showErrorModal(res.msg) // 提示信息或页面加载不当会引发任何内容。
    }
}
initDefaultData()

// 获取手机号验证码
const getCode = async () => {
    if (defData.send.visible) return
    const res = await ApiCommon.sendCode({ phone: form.phone, type: 4 })

    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }

    defData.send.visible = true
    let time = 60
    defData.send.text = `${time}秒后重新获取`
    defData.send.time = setInterval(() => {
        time--
        defData.send.text = `${time}秒后重新获取`
        if (time <= 0) {
            clearInterval(defData.send.time)
            defData.send.visible = false
            defData.send.text = '获取验证码'
        }
    }, 1000)
}

const addClick = async () => {
    const validate = await formRef.value?.validate()
    if (!validate) return
    const data: AfterCenterApi_add = {
        type: defData.type as 1 | 2,
        contacts: form.contacts,
        phone: form.phone,
        address: form.address,
        province: form.province,
        city: form.city,
        area: form.area,
        validate_code: form.validate_code,
        goods_type: form.cat_id,
        goods_type_txt: form.cat_name,
        goods_code: form.goods_code,
        describe: form.describe,
        ask_date: form.ask_date,
        // des_vivo: form.des_vivo,
        // des_img: form.des_img,
    }
    // console.log('data :>> ', data)
    const res = await AfterCenterApi.add(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    // console.log('res :>> ', res)
    showToast({
        title: '申请成功',
    })
    uni.navigateTo({
        url: '/pages/user/after/afterCenter',
    })
}
</script>

<style lang="scss" scoped>
.bottom-button {
    width: 100%;
    position: fixed;
    bottom: 0;
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

.uni-text {
    font-size: 13px;
    // color: rgb(166, 5, 5);
    margin-left: 5px;
}
</style>
