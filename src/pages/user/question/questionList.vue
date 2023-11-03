<template>
    <view>
        <uni-list>
            <uni-list-item style="background-color: #efefef;" title="深圳宇问 宇问 转速表-非接触式 YW-762F"
                thumb="/src/static/images/logo1.png" />
            <view class="mt3" />
            <uni-list-item style="background-color: #efefef;" title="问题1：以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" />
            <view class="mt3" />
            <uni-list-item style="background-color: #efefef;height: 30px;" title="用户1"
                thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" thumb-size="sm"
                right-text="2023-10-30 10:00:00" />
            <uni-list-item :border="false" style="background-color: #efefef;"
                title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" />
        </uni-list>
    </view>
</template>

<script setup lang="ts">
const onload = (row: any): any => {
    const i = row.id
    console.log('i >> ', i)
}

// 页面加载时
onMounted(() => {
    // onload()
})
</script>

<style lang="scss" scoped></style>
