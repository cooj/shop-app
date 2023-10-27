<template>
    <view>
        <view v-for="(item, index) in defData.tableData" :key="index" class="w100% bg-#f8f8f8f8 min-h-70px mt15px">
            <view class="flex justify-between p10px">
                <view class="color-#d7231e text-15px">
                    <view v-if="item.type === 1">
                        建议
                    </view>
                    <view v-else-if="item.type === 2">
                        投诉
                    </view>
                    <view v-else-if="item.type === 3">
                        商品
                    </view>
                    <view v-else-if="item.type === 4">
                        其他
                    </view>
                    <view v-else-if="item.type === 5">
                        店铺投诉
                    </view>
                    <view v-else>
                        订单问题
                    </view>
                </view>
                <view class="text-12px">
                    <!-- {{ item.add_time }} -->
                    2023-10-20 10:00:00
                </view>
            </view>
            <view class="pl10px text-15px">
                {{ item.content }}
            </view>
            <view v-if="item.is_reply === 1" class="p10px">
                <view class="flex justify-between">
                    <view class="text-15px">
                        客服/管理员admin 回复：
                    </view>
                    <view class="text-12px">
                        2023-10-20 10:00:00
                        <!-- {{ item.reply_time }} -->
                    </view>
                </view>
                <view class="pt10px text-15px">
                    {{ item.reply_content }}
                </view>
            </view>
        </view>

        <view class="bottom-button">
            <button type="warn" @click="clickRoute">
                + 反馈/留言
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserFeedBackApi } from '@/service'

const defData = reactive({
    Total: 0, //
    page: 1,
    page_size: 10,
    loading: false,
    type: 1,
    tableData: [] as UserFeedBackApi_getListResponse['lists'],
})

const initData = async () => {
    const data: UserFeedBackApi_getList = {
        is_paging: 0,
    }
    const res = await UserFeedBackApi.getList(data)
    console.log('res.data.lists :>> ', res.data.lists)
    defData.tableData = res.data.lists
}

initData()

const clickRoute = () => {
    uni.navigateTo({
        url: '/pages/user/feedback/userFeedBack',
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
