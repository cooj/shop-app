<template>
    <view>
        <view class="peasTop">
            <view>
                <image class="w90 h90" src="/src/static/images/peas.png" />
            </view>

            <view class="pt3">
                我的工游豆
                <span style="color:#d7231e">
                    {{ defData.peasTotal }}</span>
            </view>
        </view>
        <view class="h80 flex justify-between">
            <view class="peas-title" @click="typeInClick">
                <text :class="defData.type === 1 ? 'active' : ''">
                    工游豆收入明细
                </text>
            </view>
            <view class="peas-title" @click="typeOutClick">
                <text :class="defData.type === 2 ? 'active' : ''">
                    工游豆支出明细
                </text>
            </view>
        </view>

        <view>
            <uni-table :loading="defData.loading" empty-text="暂无更多数据">
                <uni-tr v-for="(item, index) in defData.tableData" :key="index">
                    <uni-td>
                        {{ item.remarks }}
                        <uni-tr>
                            {{ item.create_at }}
                        </uni-tr>
                    </uni-td>
                    <uni-td>
                        <view v-if="item.peas > 0" style="color: #d7231e;">
                            {{ item.peas }}
                        </view>
                        <view v-else style="color: green;">
                            {{ item.peas }}
                        </view>
                    </uni-td>
                </uni-tr>
            </uni-table>
            <!-- <view class="uni-pagination-box">
                <uni-pagination show-icon :page-size="defData.page_size" :current="defData.peasTotal"
                    :total="defData.peasTotal" @change="change" />
            </view> -->
        </view>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { UserPeasApi } from '@/service'

const defData = reactive({
    peasTotal: 0, // 总的工游豆
    page: 1,
    page_size: 10,
    loading: false,
    type: 1,
    tableData: [] as UserPeasApi_getListResponse['lists'],
})
const typeInClick = () => {
    defData.type = 1
    initData()
}
const typeOutClick = () => {
    defData.type = 2
    initData()
}

const initData = async () => {
    const data: UserPeasApi_getList = {
        // page: defData.page,
        // page_size: defData.page_size,
        type: defData.type as 0 | 1 | 2,
    }
    const res = await UserPeasApi.getList(data)
    defData.tableData = res.data.lists
    defData.peasTotal = res.data.peas
    console.log('res.data >> ', res.data)
}
initData()
</script>

<style lang="scss" scoped>
.peasTop {
    background-color: #efefef;
    width: 100%;
    height: 90rpx;
    font-size: 16px;
    display: flex;
}

.peas-title {
    // color: #c86f6f;
    margin-top: 13rpx;
    text-align: center;
    width: 50%;
}

.active {
    color: #d7231e;
    border-bottom: 6rpx solid #d7231e;

}

.demo-uni-row {
    margin-bottom: 10px;
    font-size: 15px;
    display: block;
}
</style>
