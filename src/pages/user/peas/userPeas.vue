<template>
    <view>
        <view class="peasTop">
            <view>
                <image class="w90 h90" src="/src/static/images/peas.png" />
            </view>

            <view class="pt3" @click="typeClick">
                我的工游豆
                <span style="color:#d7231e">
                    {{ defData.peasTotal }}</span>
            </view>
        </view>
        <view class="h80">
            <uni-row class="demo-uni-row" width="730">
                <uni-col :span="12">
                    <view class="peas-title ml2" @click="typeInClick">
                        工游豆收入明细
                    </view>
                </uni-col>
                <uni-col :span="12">
                    <view class="peas-title" @click="typeOutClick">
                        工游豆支出明细
                    </view>
                </uni-col>
            </uni-row>
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
    page: 0,
    page_size: 10,
    loading: false,
    type: 0,
    tableData: [] as UserPeasApi_getListResponse['lists'],
})
const typeClick = () => {
    defData.type = 0
    initData()
}
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

    &:hover {
        color: #d7231e;
        text-decoration: underline #d7231e;
    }
}

.demo-uni-row {
    margin-bottom: 10px;
    font-size: 15px;
    // 组件在小程序端display为inline
    // QQ、字节小程序文档写有 :host，但实测不生效
    // 百度小程序没有 :host
    /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
    display: block;
    /* #endif */
}
</style>
