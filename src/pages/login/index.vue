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
                    <uni-forms-item v-if="defData.current === 0" label="" name="password">
                        <uni-easyinput v-model="form.data.password" type="password" trim placeholder="请输入密码" />
                    </uni-forms-item>
                    <uni-forms-item v-else-if="defData.current === 1" label="" name="code">
                        <view class="flex">
                            <uni-easyinput v-model="form.data.password" trim placeholder="请输入验证码" class="w55%" />
                            <view class="w45% lh-36px text-center ">
                                <text v-if="defData.send.visible">
                                    {{ defData.send.text }}
                                </text>
                                <!-- <view v-else class="w100% h100%">
                                    获取验证码
                                </view> -->
                                <!-- v-else -->
                                <button v-else class="h36px text-14px lh-36px" @click="getCode">
                                    获取验证码
                                </button>
                                <!-- <uni-button type="error" size="mini" class="w100%" @click="getCode">
                                    <text class="lh-36px">
                                        获取验证码
                                    </text>
                                </uni-button> -->
                            </view>
                        </view>
                    </uni-forms-item>
                </uni-forms>
                <view>
                    <!-- <button>登录</button> -->
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

// import { showModal } from '@/utils'

const formRef = ref()

const defData = reactive({
    tabItems: ['密码登录', '验证码登录'],
    current: 0,
    send: {
        time: 0,
        visible: false,
        text: '',
    },
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
    if (defData.send.visible) return

    // 部分表单进行校验，接受一个参数，类型为 String 或 Array ，只校验传入 name 表单域的值
    const isRun = await formRef.value?.validateField(['phone'])
    console.log(isRun)
    if (!isRun) return

    const res = await ApiCommon.sendCode({ phone: form.data.phone, type: 1 })

    console.log(res)
    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }

    defData.send.visible = true
    let time = 60
    defData.send.text = `${time}秒后重新获取`
    defData.send.time = setInterval(() => {
        time--
        defData.send.text = `${time}秒后重新获取`
        if (time <= 0) {
            clearInterval(defData.send.time)
            defData.send.visible = false
            defData.send.text = '获取验证码'
        }
    }, 1000)
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
    width: 300px;
    min-height: 300px;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px 20px 20px;

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
        .content-clear-icon {
            color: #f00 !important;
        }
    }
}
</style>
