<template>
    <view class="">
        <view class="bg-#efefef h90rpx flex">
            <view class="pt3 ml3">
                请选择您反馈的问题的类型
            </view>
            <view class="pt3 ml3">
                <picker :value="defData.id" :range="defData.list" range-key="name" @change="bindPickerChange">
                    <view class="userInput">
                        {{ defData.name }}
                        <uni-icons type="bottom" size="10" />
                    </view>
                </picker>
            </view>
        </view>

        <view class="mt4 ml2 mr5">
            <uni-forms>
                <uni-forms-item label="内容：" name="introduction">
                    <uni-easyinput v-model="defData.content" type="textarea" placeholder="请输入内容" />
                </uni-forms-item>
            </uni-forms>
        </view>
        <view class="mt-50px">
            <button type="warn" @click="onClick">
                确定
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UserFeedBackApi } from '@/service'

const defData = reactive({
    content: '',
    id: 1,
    list: [
        {
            name: '建议',
            id: 1,
        },
        {
            name: '投诉',
            id: 2,
        },
        {
            name: '商品',
            id: 3,
        },
        {
            name: '其他',
            id: 4,
        },
        {
            name: '店铺投诉',
            id: 5,
        },
        {
            name: '订单问题',
            id: 6,
        },
    ],
    name: '建议',
})

const bindPickerChange = (e: { detail: { value: any } }) => {
    const key = e.detail.value
    defData.name = defData.list[key].name
    defData.id = defData.list[key].id
}

const onClick = async () => {
    const data: UserFeedBackApi_add = {
        type: defData.id,
        content: defData.content,
    }
    const res = await UserFeedBackApi.add(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    showToast({
        title: '反馈成功',
    })
    defData.content = ''
    defData.name = '建议'
    defData.id = 1
}
</script>

<style lang="scss" scoped>
.userInput {
    width: 240rpx;
    height: 50rpx;
    background-color: white;
    border: 1px solid #b0b0b0;
    border-radius: 6px;
    text-align: center;
    color: #949494;
}
</style>
