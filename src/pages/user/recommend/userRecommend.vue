<template>
    <view>
        <view>
            <uni-card :is-shadow="false">
                <view class="flex justify-between">
                    <view class="text-20px">
                        推荐分享
                    </view>
                    <view @click="onCopy">
                        复制
                    </view>
                </view>
                <view>
                    http://scdev.goyogo.com/login/register?id={{ userStore.user?.user_id }}
                </view>
            </uni-card>
        </view>

        <view>
            <uni-table border :loading="defData.loading" empty-text="暂无更多数据">
                <uni-tr>
                    <uni-th align="center">
                        分享成功用户
                    </uni-th>
                    <uni-th align="center">
                        操作信息
                    </uni-th>
                    <uni-th align="left">
                        添加时间
                    </uni-th>
                </uni-tr>
                <uni-tr v-for="(item, index) in defData.tableData" :key="index">
                    <uni-td>
                        {{ item.user_name }}
                    </uni-td>
                    <uni-td>
                        <view>
                            {{ item.run_info }}
                        </view>
                    </uni-td>
                    <uni-td>
                        <view>
                            {{ item.add_time }}
                        </view>
                    </uni-td>
                </uni-tr>
            </uni-table>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useUserStore } from '@/store'
import { UserRecommendApi } from '@/service'

const userStore = useUserStore()
const defData = reactive({
    loading: false,
    shareLink: '',
    tableData: [] as UserRecommendApi_getListResponse[],
})

const initData = async () => {
    const res = await UserRecommendApi.getList()
    defData.tableData = res.data
}

const onCopy = async () => {
    try {
        await navigator.clipboard.writeText(defData.shareLink)
        showToast({
            title: '复制成功',
        })
    } catch (err) {
        const e = document.createElement('textarea')
        document.body.appendChild(e)
        e.innerHTML = defData.shareLink
        e.select()
        if (document.execCommand('copy')) {
            document.execCommand('copy')
        }
        document.body.removeChild(e)
        showToast({
            title: '复制成功',
        })
    }
}

// 页面加载时
onMounted(async () => {
    await userStore.getUserInfo()
    if (userStore.user) {
        defData.shareLink = `http://scdev.goyojo.com/login/register?id=${userStore.user.user_id}`
    }

    initData()
})
</script>

<style lang="scss" scoped></style>
