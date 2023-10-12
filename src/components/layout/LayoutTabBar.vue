<template>
    <view>
        <!-- <custom-tab-bar direction="horizontal" :selected="selected" @on-tab-item-tap="onTabItemTap" /> -->
        <view @click="onTabItemTap">
            {{ selected }}
        </view>
    </view>
</template>

<script lang="ts" setup>
const selected = ref(0)
const onTabItemTap = (e: any) => {
    console.log(e)
}
</script>

<style lang="scss" scoped></style>
