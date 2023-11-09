<template>
    <view>
        <uni-list v-for="(item, index) in defData.lists" :key="index">
            <uni-list-item style="background-color: #efefef;" :title="item.goods_name"
                thumb="/src/static/images/logo1.png" />
            <view class="mt3" />
            <uni-list-item style="background-color: #efefef;" :title="`我的提问：${item.content}`" />
            <view class="mt3" />
            <!-- <uni-list-item style="background-color: #efefef;height: 30px;" :title=""
                thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="sm"
                :right-text="item1" />
            <uni-list-item :border="false" style="background-color: #efefef;" :title="item1" /> -->
        </uni-list>
        <!-- <uni-list v-for="(item1, index1) in defData.answer_lists" :key="index1"> -->

        <!-- </uni-list> -->
    </view>
</template>

<script setup lang="ts">
import { UserQuestionApi } from '@/service'

const query = defineProps<{
    id?: number
}>()
const defData = reactive({
    lists: [] as UserQuestionApi_getListResponse['lists'],
    answer_lists: [] as UserQuestionApi_getListResponse['lists'],
})

const initData = async () => {
    const data: UserQuestionApi_getList = {
        type: 1,
        is_paging: 0,
        question_id: query.id,
    }
    const res = await UserQuestionApi.getList(data)
    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }
    defData.lists = res.data.lists
    // defData.answer_lists = res.data.lists.answer_lists
    console.log('res.data.lists :>> ', res.data.lists)
    console.log('defData.answer_lists :>> ', defData.answer_lists)
}
// 页面加载时
onMounted(() => {
    initData()
})
</script>

<style lang="scss" scoped></style>
