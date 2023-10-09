<template>
    <view>
        <view class="peasTop">
            <view class="pt3 ml3">
                我的工游豆 100
                <!-- {{ defData.peasTotal }} -->
            </view>
        </view>
        <view class="h80">
            <uni-row class="demo-uni-row" width="730">
                <uni-col :span="12">
                    <view class="peas-title ml2">
                        工游豆收支明细
                    </view>
                </uni-col>
                <uni-col :span="12">
                    <view class="peas-title">
                        即将过期工游豆明细
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
                        <view v-if="item.peas > 0" style="color: red;">
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
    // tableData: [] as UserPeasApi_getListResponse['lists'],
    tableData: [
        {
            peas: +500,
            remarks: '订单2936482628消费赠送的工游豆',
            create_at: '2023-05-01',
        },
        {
            peas: -200,
            remarks: '订单2936482611消费抵扣的工游豆',
            create_at: '2023-06-01',
        },
        {
            peas: +1000,
            remarks: '会员注册赠送',
            create_at: '2023-07-01',
        },
    ],
})

const initData = async () => {
    const data: UserPeasApi_getList = {
        // page: defData.page,
        // page_size: defData.page_size,
        type: 0,
    }
    const res = await UserPeasApi.getList(data)
    defData.tableData = res.data.lists
    console.log('res.data >> ', res.data)
}
// initData()
</script>

<style lang="scss" scoped>
.peasTop {
    background-color: rgb(201, 201, 201);
    width: 100%;
    height: 90rpx;
    font-size: 16px;
}

.peas-title {
    // color: #c86f6f;
    margin-top: 13rpx;
    &:hover{
        color: #dd5c06;
        text-decoration: underline #dd5c06;
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
