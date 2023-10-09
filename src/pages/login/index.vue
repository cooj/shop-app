<template>
    <view class="h100vh ">
        <view class="h100% flex justify-center items-center flex-col pb10%">
            <view class="text-center">
                <image class="w270px h90px" src="@/static/images/logo.png" />
            </view>
            <view class="form">
                <view class="mb20px">
                    <uni-segmented-control :current="defData.current" :values="defData.tabItems" style-type="text"
                        active-color="#dd524d" @click-item="onClickTab" />
                </view>

                <uni-forms ref="formRef" :model="form.data" :rules="rules" label-width="0">
                    <uni-forms-item label="" name="phone">
                        <uni-easyinput v-model="form.data.phone" focus trim type="number" placeholder="请输入手机号码" />
                    </uni-forms-item>
                    <uni-forms-item label="" name="password">
                        <uni-easyinput v-model="form.data.password" type="password" trim placeholder="请输入密码" />
                    </uni-forms-item>
                </uni-forms>

                <view class="content">
                    <view v-if="defData.current === 0">
                        <text class="content-text">
                            选项卡1的内容
                        </text>
                    </view>
                    <view v-if="defData.current === 1">
                        <text class="content-text">
                            选项卡2的内容
                        </text>
                    </view>
                    <view v-if="defData.current === 2">
                        <text class="content-text">
                            选项卡3的内容
                        </text>
                    </view>
                </view>
                <view>
                    <button>登录</button>
                    <button type="warn" @click="onSubmit">
                        登录
                    </button>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ApiCommon } from '@/service'

const formRef = ref()

const defData = reactive({
    tabItems: ['密码登录', '验证码登录'],
    current: 0,
})

const form = reactive({
    data: {
        phone: '', // 手机号码
        password: '', // 密码
        code: '', // 验证码
    },
})

const rules = reactive({
    phone: {
        // name 字段的校验规则
        rules: [
            // 校验 name 不能为空
            { required: true, errorMessage: '请填写手机号码' },
            // 对name字段进行长度验证
            {
                // minLength: 3,
                // maxLength: 5,
                // errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
                patten: '^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$',
                errorMessage: '请填写正确的手机号码',
            },
        ],
        // 当前表单域的字段中文名，可不填写
        // label: '姓名',
        validateTrigger: 'submit',
    },
})

// 登录切换
const onClickTab = (e: { currentIndex: number }) => {
    defData.current = e.currentIndex
}

/**
 * 获取验证码
 */
const getCode = async () => {
    const res = await ApiCommon.sendCode({ phone: '18126053235', type: 1 })
    console.log(res)
}

const onSubmit = async () => {
    // 使用 Promise
    // 对整个表单进行校验，返回一个 Promise
    const res = await formRef.value.validate()

    console.log(res)
    // .then((res) => {
    //     // 成功返回，res 为表单数据
    //     // 其他逻辑处理
    //     // ...
    // }).catch((err) => {
    //     // 表单校验验失败，err 为具体错误信息
    //     // 其他逻辑处理
    //     // ...
    // })
}

onLoad(() => {
    // getCode()
})
</script>

<style lang="scss" scoped>
.form {
    width: 280px;
    min-height: 300px;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px 15px;

    margin-top: 30px;

    :deep(.segmented-control__text) {
        font-size: 15px;
        font-weight: bold;
    }

    :deep(.is-input-border) {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-radius: 0;

        &.is-focused {
            border-color: #f00 !important;

        }
    }

    :deep(.is-input-border.is-focused) {
        .uniui-eye-filled {
            color: #f00 !important;
        }
    }
}
</style>
