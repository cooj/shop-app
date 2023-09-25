<template>
    <view>
        <uni-grid :column="4" :highlight="true" :show-border="false">
            <uni-grid-item v-for="(item, index) in 4" :key="index" :index="index">
                <view class="flex justify-center items-center flex-col">
                    <uni-icons type="image" :size="30" color="#777" />
                    <text class="text">
                        文本信息{{ item }}
                    </text>
                </view>
            </uni-grid-item>
        </uni-grid>
    </view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
