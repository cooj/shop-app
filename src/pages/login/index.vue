<template>
    <view class="h100vh relative  max-w600px px30px ma">
        <view class="absolute left-0px top-5px w40px h40px flex justify-center items-center" @click="onBack()">
            <uni-icons custom-prefix="custom-icon" type="back" size="28" />
        </view>
        <view class="h100% flex justify-center items-center flex-col pb15%">
            <view class="text-center">
                <image class="md:w30rem md:h10rem w270px h90px" src="@/static/images/logo.png" />
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
                            <uni-easyinput v-model="form.data.code" trim placeholder="请输入验证码" class="w55%" />
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
                <view class="mt10px">
                    <!-- <button>登录</button> -->
                    <button type="warn" @click="onSubmit">
                        登录
                    </button>
                </view>
                <view class="flex justify-between mt8px">
                    <navigator url="/pages/login/forget" hover-class="navigator-hover">
                        忘记密码
                    </navigator>
                    <navigator url="/pages/login/register" hover-class="navigator-hover">
                        注册账号
                    </navigator>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ApiCommon, ApiLogin } from '@/service'

// import { showModal } from '@/utils'

const formRef = ref<UniHelper.UniForms>()

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
                pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                errorMessage: '请填写正确的手机号码',
            },
        ],
        // 当前表单域的字段中文名，可不填写
        // label: '姓名',
        validateTrigger: 'submit',
    },
    password: {
        rules: [
            { required: true, errorMessage: '请填写登录密码' },
        ],
        validateTrigger: 'submit',
    },
    code: {
        rules: [
            { required: true, errorMessage: '请填写验证码' },
        ],
        validateTrigger: 'submit',
    },
})

// 获取当前打开过的页面路由数组
const routes = getCurrentPages()

// 登录切换
const onClickTab = (e: { currentIndex: number }) => {
    defData.current = e.currentIndex
}

// 返回
const onBack = () => {
    if (routes.length > 1) {
        routeBack()
    } else {
        routeTabbar('/')
    }
}

/**
 * 获取验证码
 */
const getCode = async () => {
    if (defData.send.visible) return

    // 部分表单进行校验，接受一个参数，类型为 String 或 Array ，只校验传入 name 表单域的值
    const validate = await formRef.value?.validateField(['phone'])
    if (!validate) return

    const res = await ApiCommon.sendCode({ phone: form.data.phone, type: 2 })

    if (res.code !== 200) {
        return showModal({
            content: res.msg,
        })
    }
    // showToast({
    //     title: '发送成功',
    // })

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

// 登录
const onSubmit = async () => {
    // 使用 Promise
    // 对整个表单进行校验，返回一个 Promise
    const validate = await formRef.value?.validate()
    if (!validate) return

    let data: ILoginCommonPassword | ILoginCommonCode | undefined

    if (defData.current === 0) { // 账号密码登录
        const param: ILoginCommonPassword = {
            type: 1,
            phone: form.data.phone,
            password: form.data.password,
        }
        data = param
    } else if (defData.current === 1) { // 手机号验证码登录
        const param: ILoginCommonCode = {
            type: 2,
            phone: form.data.phone,
            validate_code: form.data.code?.trim(),
        }
        data = param
    }
    if (!data) return showToast({ title: '网络错误!' })
    const res = await ApiLogin.login(data)

    if (res.code !== 200) {
        return showToast({ title: res.msg })
        // return showErrorModal(res.msg)
    }

    setStorage('token', res.data.token)
    routeTabbar('/pages/user/index')
}

onLoad(() => {
    // getCode()
})
</script>

<style lang="scss" scoped>
.form {
    width: 100%;
    min-height: 45%;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    font-size: 14px;
    padding: 10px 30px 20px;

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
