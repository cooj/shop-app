<template>
    <view>
        <view class="scroll-view-container">
            <!-- 左侧列表 -->
            <scroll-view class="left-scroll-view" scroll-y="true" :style="{ height: `${defData.wh}px` }">
                <block v-for="(item, i) in defData.classifyList" :key="i">
                    <view class="left-scroll-view-item" :class="[i === defData.active ? 'active' : '']"
                        @click="activeChanged(i)">
                        {{ item.cat_name }}
                    </view>
                </block>
            </scroll-view>

            <!-- 右侧列表 -->
            <scroll-view scroll-y="true" :style="{ height: `${defData.wh}px` }" :scroll-top="defData.scrollTop">
                <view v-for="(item2, i2) in defData.cateTweLevel" :key="i2" class="cate-lv2">
                    <!-- 二级分类标题 -->
                    <view class="cate-lv2-title">
                        {{ item2.cat_name }}
                    </view>
                    <!-- 二级分类下的三级分类列表 -->
                    <view class="cate-lv3-list">
                        <view v-for="(item3, i3) in item2.children" :key="i3" class="cate-lv3-item">
                            <!-- 三级分类下的图片 -->

                            <image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
                                class="w60px h60px" />
                            <!-- 三级分类下的文本 -->
                            <text class="text-13px m1">
                                {{ item3.cat_name }}
                            </text>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script setup lang="ts">
// import { ClassifyApi } from '@/service/api/classify/classify'

const defData = reactive({
    active: 0,
    scrollTop: 0,
    wh: 0, // 当前设备可用高度

    classifyList: [
        {
            cat_id: 0,
            cat_name: '户外装备',
            children: [
                {
                    cat_id: 1,
                    cat_name: '户外装备分类1',
                    children: [
                        {
                            cat_id: 15,
                            cat_name: '商品1',
                        },
                        {
                            cat_id: 17,
                            cat_name: '商品2',
                        },
                        {
                            cat_id: 18,
                            cat_name: '商品3',
                        },
                        {
                            cat_id: 19,
                            cat_name: '商品4',
                        },
                    ],
                },
                {
                    cat_id: 2,
                    cat_name: '户外装备分类2',
                    children: [
                        {
                            cat_id: 15,
                            cat_name: '商品1',
                        },
                        {
                            cat_id: 17,
                            cat_name: '商品2',
                        },
                        {
                            cat_id: 18,
                            cat_name: '商品3',
                        },
                        {
                            cat_id: 19,
                            cat_name: '商品4',
                        },
                    ],
                },
            ],
        },
        {
            cat_id: 1,
            cat_name: '行业仪器',
            children: [
                {
                    cat_id: 1,
                    cat_name: '行业仪器分类1',
                    children: [
                        {
                            cat_id: 15,
                            cat_name: '商品1',
                        },
                        {
                            cat_id: 17,
                            cat_name: '商品2',
                        },
                    ],
                },
                {
                    cat_id: 2,
                    cat_name: '行业仪器分类2',
                    children: [
                        {
                            cat_id: 15,
                            cat_name: '商品1',
                        },
                        {
                            cat_id: 17,
                            cat_name: '商品2',
                        },
                        {
                            cat_id: 18,
                            cat_name: '商品3',
                        },
                    ],
                },
            ],
        },
        {
            cat_id: 2,
            cat_name: '机械设备',
            children: [
                {
                    cat_id: 1,
                    cat_name: '机械设备分类1',
                },
                {
                    cat_id: 2,
                    cat_name: '机械设备分类2',
                },
            ],
        },
        {
            cat_id: 3,
            cat_name: '设备配件',
            children: [
                {
                    cat_id: 1,
                    cat_name: '设备配件分类1',
                },
                {
                    cat_id: 2,
                    cat_name: '设备配件分类2',
                },
            ],
        },
        {
            cat_id: 4,
            cat_name: '试剂',
            children: [
                {
                    cat_id: 1,
                    cat_name: '试剂分类1',
                },
                {
                    cat_id: 2,
                    cat_name: '试剂分类2',
                },
            ],
        },
        {
            cat_id: 5,
            cat_name: '物探仪',
            children: [
                {
                    cat_id: 1,
                    cat_name: '物探仪分类1',
                },
                {
                    cat_id: 2,
                    cat_name: '物探仪分类2',
                },
            ],
        },
        {
            cat_id: 6,
            cat_name: '常用设备',
            children: [
                {
                    cat_id: 1,
                    cat_name: '常用设备分类1',
                },
                {
                    cat_id: 2,
                    cat_name: '常用设备分类2',
                },
            ],
        },
        {
            cat_id: 7,
            cat_name: '海洋设备',
        },
        {
            cat_id: 8,
            cat_name: '海洋设备',
        },
        {
            cat_id: 9,
            cat_name: '海洋设备',
        },
        {
            cat_id: 10,
            cat_name: '海洋设备',
        },
        {
            cat_id: 11,
            cat_name: '海洋设备',
        },
        {
            cat_id: 12,
            cat_name: '海洋设备',
        },
    ],
    cateTweLevel: [
        {
            cat_id: 1,
            cat_name: '户外装备分类1',
            children: [
                {
                    cat_id: 15,
                    cat_name: '商品1',
                },
                {
                    cat_id: 17,
                    cat_name: '商品2',
                },
                {
                    cat_id: 18,
                    cat_name: '商品3',
                },
                {
                    cat_id: 19,
                    cat_name: '商品4',
                },
            ],
        },
        {
            cat_id: 2,
            cat_name: '户外装备分类2',
            children: [
                {
                    cat_id: 15,
                    cat_name: '商品1',
                },
                {
                    cat_id: 17,
                    cat_name: '商品2',
                },
                {
                    cat_id: 18,
                    cat_name: '商品3',
                },
                {
                    cat_id: 19,
                    cat_name: '商品4',
                },
            ],
        },
    ],
})

// 获取商品分类列表数据
const initData = async () => {
    // const res = await uni.request({
    //     url: 'http://scdevapi.goyojo.com/api/mobile/goods_category/index',
    //     method: 'GET',
    // })
    // if (res.statusCode !== 200) return uni.showToast({ title: '请求失败' })
    // defData.classifyList = res.data
    // console.log('defData.classifyList :>> ', defData.classifyList)
}

// 点击样式改变
const activeChanged = (i: any) => {
    defData.active = i

    // 重新为二级分类赋值
    // defData.cateTweLevel = defData.classifyList[i].children

    defData.scrollTop = defData.scrollTop ? 1 : 0
}

// 页面加载时
onMounted(() => {
    const sysInfo = uni.getSystemInfoSync()
    defData.wh = sysInfo.windowHeight

    initData()
})
</script>

<style>
.scroll-view-container {
    display: flex;

    .left-scroll-view {
        width: 120px;

        .left-scroll-view-item {
            background-color: #f7f7f7;
            line-height: 60px;
            text-align: center;
            font-size: 14px;

            &.active {
                background-color: #ffffff;
                position: relative;
                font-weight: bold;

            }
        }
    }
}

.cate-lv2-title {
    font-size: 14px;
    font-weight: bold;
    /* text-align: center; */
    padding: 15px 0;
    margin-left: 15px;
}

.cate-lv3-list {
    display: flex;
    flex-wrap: wrap;

    .cate-lv3-item {
        width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
}
</style>
