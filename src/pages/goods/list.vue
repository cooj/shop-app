<!-- 商品列表 -->
<template>
    <view>
        <view>
            <uni-list>
                <uni-list-item v-for="item in 10" :key="item" :show-extra-icon="true" title="列表左侧带扩展图标" clickable
                    @click="goGoodsDetail(item)">
                    <template #header>
                        <navigator :url="`detail?id=AA0001${item}`" hover-class="navigator-hover">
                            <image class="w110px h110px"
                                src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" />
                        </navigator>
                    </template>
                    <template #body>
                        <view class="flex-1 pl8px">
                            <view class="text-14px goods-tle mb5px">
                                代尔塔 安全鞋 彩虹系列S1代尔塔 安全鞋 彩虹系列S1P,{{ item }}
                            </view>
                            <view class="text-12px c-#888 mb5px">
                                商品型号：HT6510P
                            </view>
                            <view class="flex items-center justify-between">
                                <text class="c-#f00 font-bold">
                                    ￥0.00
                                </text>
                                <view class="flex item-center">
                                    <uni-fav :checked="false" @click="onToggleCollect($event, item)" />

                                    <view @click="onAddCart($event, item)">
                                        <uni-icons type="plus" size="25" color="#fa210a" class="ml5px" />
                                    </view>
                                </view>
                            </view>
                        </view>
                    </template>
                </uni-list-item>
                <uni-list-item :show-extra-icon="true" title="列表左侧带扩展图标">
                    <template #header>
                        <navigator url="detail?id=10" hover-class="navigator-hover">
                            <image class="w110px h110px bg-#f1f1f1"
                                src="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo0.png" />
                        </navigator>
                    </template>
                    <template #body>
                        <view class="flex-1 pl8px">
                            <view class="text-14px goods-tle mb5px">
                                代尔塔 安全鞋 彩虹系列S1代尔塔 安全鞋 彩虹系列S1P
                            </view>
                            <view class="text-12px c-#888 mb5px">
                                商品型号：HT6510P
                            </view>
                            <view class="flex items-center justify-between">
                                <text class="c-#f00 font-bold">
                                    ￥0.00
                                </text>
                                <view class="flex item-center">
                                    <uni-fav :checked="false" />

                                    <uni-icons type="plus" size="25" color="#fa210a" class="ml5px" @click="onAddCart" />
                                </view>
                            </view>
                        </view>
                    </template>
                </uni-list-item>
            </uni-list>
        </view>

        <uni-nav-bar left-icon="arrowleft">
            <!-- <template #left>
                <view class="city">
                    <view>
                        <text class="uni-nav-bar-text">
                            {{ city }}
                        </text>
                    </view>
                    <uni-icons type="arrowdown" color="#666" size="18" />
                </view>
            </template> -->
            <view class="input-view">
                <uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
                <input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="onSearch">
            </view>
            <template #right>
                <view class="city">
                    搜索
                </view>
            </template>
        </uni-nav-bar>

        <uni-button @click="openDrawer()">
            展开
        </uni-button>
        <!-- 侧边展开栏目 -->
        <uni-drawer ref="drawerRef" mode="right">
            <view class="scroll-view">
                <scroll-view class="scroll-view-box" scroll-y="true">
                    <uni-collapse v-model="form.data.activeValue">
                        <uni-collapse-item title="商品分类" show-animation>
                            <!-- <view class="content">
                                <text class="text">
                                    默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。
                                </text>
                            </view> -->
                            <view class="uni-px-5">
                                <view class="text">
                                    单选选中：{{ JSON.stringify(form.data.category) }}
                                </view>
                                <uni-data-checkbox v-model="form.data.category" mode="tag" :localdata="defData.classList" />
                            </view>
                        </uni-collapse-item>
                        <uni-collapse-item title="商品品牌" show-animation>
                            <view class="uni-px-5">
                                <view class="text">
                                    单选选中：{{ JSON.stringify(form.data.brand) }}
                                </view>
                                <uni-data-checkbox v-model="form.data.brand" mode="tag" :localdata="defData.brandList" />
                            </view>
                        </uni-collapse-item>
                    </uni-collapse>

                    <view class="info">
                        <text class="info-text">
                            右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭
                        </text>
                    </view>
                    <view class="close">
                        <button @click="closeDrawer()">
                            <text class="word-btn-white">
                                关闭Drawer
                            </text>
                        </button>
                    </view>
                    <view v-for="item in 100" :key="item" class="info-content">
                        <text>可滚动内容 {{ item }}</text>
                    </view>
                    <view class="close">
                        <button @click="closeDrawer()">
                            <text class="word-btn-white">
                                关闭Drawer
                            </text>
                        </button>
                    </view>
                </scroll-view>
            </view>
        </uni-drawer>

        <!-- 商品搜索弹窗 -->
        <uni-popup ref="popupRef" background-color="#fff" :is-mask-click="false">
            <view class="popup-content py5px">
                <uni-list>
                    <uni-list-item title="硬度计1" />
                    <uni-list-item title="硬度计2" />
                    <uni-list-item title="硬度计3" />
                </uni-list>
            </view>
        </uni-popup>
    </view>
</template>

<script lang="ts" setup>
type GoodsListItem = any

const drawerRef = ref()

const defData = reactive({
    // goodsClass: [{
    //     text: '手机',
    //     value: 1,
    // }, {
    //     text: '电脑',
    //     value: 2,
    // }],
    classList: Array.from({ length: 10 }, (_, i) => ({ text: `手机${i}`, value: i })),
    brandList: Array.from({ length: 10 }, (_, i) => ({ text: `红衫${i}`, value: i })),
})

const form = reactive({
    data: {
        activeValue: ['0', '1'],
        category: '', // goods分类
        brand: '', // 品牌
        keyword: '', // 搜索关键字
    },
})

// 打开搜索项
const openDrawer = () => {
    console.log(drawerRef.value)
    drawerRef.value?.open()
}

// 关闭搜索项
const closeDrawer = () => {
    drawerRef.value?.close()
}

const openSetting = (e: any) => {
    console.log('e :>> ', e)
}

const goGoodsDetail = (row: GoodsListItem) => {
    console.log(123)
    routeTo('/pages/goods/detail', {
        id: `AA0001${row}`,
    })
}

// 商品搜索
const onSearch = () => {
    const { keyword } = form.data
    console.log('keyword :>> ', keyword)
}

// 收藏事件
const onToggleCollect = (e: Event, row: GoodsListItem) => {
    e.stopPropagation()
}

// 加入购物车
const onAddCart = (e: Event, row: GoodsListItem) => {
    e.stopPropagation()
    console.log(e)
    console.log(row)
}

const popupRef = ref()

// 顶部 搜索框输入事件
onNavigationBarSearchInputChanged((e) => {
    const text = e.text
    // text为搜索框中输入的内容
    form.data.keyword = text
    if (!text) {
        popupRef.value?.close()
        return
    }

    // 模糊搜索事件

    popupRef.value?.open('top')
})
// 顶部 搜索框按下回车事件
onNavigationBarSearchInputConfirmed(() => {
    onSearch()
})

// 顶部 搜索点击事件
onNavigationBarButtonTap(() => {
    onSearch()
})
</script>

<style lang="scss" scoped>
.scroll-view {
    /* #ifndef APP-NVUE */
    width: 100%;
    height: 100%;
    /* #endif */
    flex: 1
}

// 处理抽屉内容滚动
.scroll-view-box {
    flex: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.input-view {
    --co-input-search-height: 30px;

    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    /* #endif */
    align-items: center;
    flex-direction: row;
    // width: 500rpx;
    flex: 1;
    background-color: #f8f8f8;
    height: var(--co-input-search-height);
    border-radius: 15px;
    padding: 0 15px;
    flex-wrap: nowrap;
    margin: 7px 0;
    line-height: var(--co-input-search-height);
}

.goods-tle {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 20px;
    height: 40px;
}
</style>
