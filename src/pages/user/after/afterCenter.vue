<template>
    <view>
        <view>
            <uni-table class="ml1" border :loading="defData.loading" empty-text="暂无更多数据">
                <uni-tr>
                    <uni-th align="center">
                        类型
                    </uni-th>
                    <uni-th align="center">
                        预约时间
                    </uni-th>
                    <uni-th align="center">
                        商品
                    </uni-th>
                </uni-tr>
                <uni-tr v-for="(item, index) in defData.tableData" :key="index">
                    <uni-td>
                        {{ item.type === 1 ? "安装申请" : "维护申请" }}
                    </uni-td>
                    <uni-td>
                        <view>
                            {{ item.ask_date }}
                        </view>
                    </uni-td>
                    <uni-td>
                        <view>
                            {{ item.goods_type_txt }}
                        </view>
                    </uni-td>
                    <uni-td>
                        <view @click="detailRoute(item.id)">
                            查看
                        </view>
                    </uni-td>
                </uni-tr>
            </uni-table>
        </view>

        <view class="bottom-button">
            <button type="warn" @click="AddClick">
                +新增申请
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { AfterCenterApi } from '@/service'

const defData = reactive({
    loading: false,
    tableData: [] as AfterCenterApi_getListResponse['lists'],
})

const initData = async () => {
    const res = await AfterCenterApi.getList()
    defData.tableData = res.data.lists
}

const AddClick = async () => {
    uni.navigateTo({
        url: '/pages/user/after/installAdd',
    })
}
const detailRoute = (id: any) => {
    uni.navigateTo({
        url: `/pages/user/after/afterDetail?id=${id}`,
    })
}

// 页面加载时
onMounted(async () => {
    initData()
})
</script>

<style lang="scss" scoped>
.bottom-button {
    width: 100%;
    position: fixed;
    bottom: 0;
}
</style>
