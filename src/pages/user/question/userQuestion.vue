<template>
    <view class="">
        <view class="flex justify-between bg-white h50px">
            <view class="coupon-title" @click="typeClick">
                <text :class="defData.type === 1 ? 'active' : ''">
                    我的提问
                </text>
            </view>
            <view class="coupon-title" @click="typeInClick">
                <text :class="defData.type === 2 ? 'active' : ''">
                    我的回答
                </text>
            </view>
        </view>
        <view v-for="(item, index) in defData.lists" :key="index">
            <uni-list :border="false">
                <uni-list-item :border="false" style="background-color: #efefef;height: 35px;" :title="item.goods_name"
                    thumb="/src/static/images/logo1.png" thumb-size="base">
                    <template #footer>
                        <view class="cart" @click="delClick(item.question_id)">
                            <uni-icons type="trash-filled" size="25" />
                        </view>
                    </template>
                </uni-list-item>
                <uni-list-item v-if="defData.type === 1" :border="false" style="background-color: #efefef;height: 40px;"
                    ellipsis="2" :title="`问题${index + 1}：${item.content}`" />
                <uni-list-item v-else :border="false" style="background-color: #efefef;height: 40px;" ellipsis="2"
                    :title="`我的问答：${item.content}`" />
                <uni-list-item v-if="defData.type === 1" :border="false" style="background-color: #efefef;height: 30px;"
                    title="2023-10-30 10:00:00" :right-text="`${item.answer_lists.length} 回答`"
                    to="/pages/user/question/questionList?id=${item.content}" />
                <view class="mt3" />
            </uni-list>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { UserQuestionApi } from '@/service'

const defData = reactive({
    loading: false,
    type: 1,
    lists: [] as UserQuestionApi_getListResponse['lists'],

})
const typeClick = () => {
    defData.type = 1
    initData()
}
const typeInClick = () => {
    defData.type = 2
    initData()
}

const questionRoute = (row: any) => {
    uni.navigateTo({
        url: '/pages/user/question/questionList',
    })
}

const initData = async () => {
    const data: UserQuestionApi_getList = {
        type: defData.type as 1 | 2,
        is_paging: 0,
    }
    const res = await UserQuestionApi.getList(data)
    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }
    defData.lists = res.data.lists
}

// 删除问题
const delClick = async (row: any) => {
    const data: UserQuestionApi_del = {
        question_id: row,
    }
    const res = await UserQuestionApi.del(data)
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
