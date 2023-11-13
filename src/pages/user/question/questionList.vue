<template>
    <view>
        <view>
            <uni-list v-for="(item, index) in defData.lists" :key="index">
                <uni-list-item style="background-color: #efefef;" :title="item.goods_name"
                    thumb="/src/static/images/logo1.png" />
                <view class="mt3" />
                <uni-list-item style="background-color: #efefef;" :title="`我的提问：${item.content}`" />
                <view class="mt3" />
            </uni-list>
        </view>
        <view v-if="defData.answer_lists.length > 0">
            <uni-list v-for="(item1, index1) in defData.answer_lists " :key="index1" :border="false">
                <uni-list-item style="background-color: #efefef;height: 30px;" :title="item1.user_name"
                    thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="sm"
                    :right-text="formatTime(item1.add_time)" />
                <uni-list-item :border="false" style="background-color: #efefef;" :title="item1.content" />
                <view class="mt3" />
            </uni-list>
        </view>
        <view v-else>
            <uni-list-item :border="false" style="background-color: #efefef;" title="暂无回答" />
        </view>
    </view>
</template>

<script setup lang="ts">
import { UserQuestionApi } from '@/service'
import { formatTime } from '@/utils'

const query = defineProps<{
    id?: string
}>()
const defData = reactive({
    lists: [] as UserQuestionApi_getListResponse['lists'],
    answer_lists: [] as UserQuestionApi_getListChildren[],
})

const initData = async () => {
    const data: UserQuestionApi_getList = {
        type: 1,
        is_paging: 0,
        question_id: Number(query.id),
    }
    const res = await UserQuestionApi.getList(data)
    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }
    defData.lists = res.data.lists
    defData.answer_lists = res.data.lists[0].answer_lists
}
initData()
</script>

<style lang="scss" scoped></style>
