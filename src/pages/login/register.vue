<template>
    <view class="relative max-w600px px30px ma">
        <view class="absolute left-0px top-5px w40px h40px flex justify-center items-center" @click="onBack()">
            <uni-icons custom-prefix="custom-icon" type="back" size="28" />
        </view>
        <view class="pt55px">
            <text>请填写以下注册信息!</text>
            <view class="flex justify-center items-center flex-col pb10%">
                <view class="form">
                    <uni-forms ref="formRef" :model="form.data" :rules="rules" label-width="0">
                        <uni-forms-item label="" name="phone">
                            <uni-easyinput v-model="form.data.phone" focus trim type="number" placeholder="请输入手机号码" />
                        </uni-forms-item>
                        <!-- <uni-forms-item label="" name="password">
                        <uni-easyinput v-model="form.data.password" type="password" trim placeholder="请输入密码" />
                    </uni-forms-item> -->
                        <uni-forms-item label="" name="code">
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
                        <uni-forms-item label="" name="agree">
                            <!-- <view class="flex flex-wrap"> -->
                            <!-- <label>
                                <checkbox value="cb" />我已阅读并同意
                            </label> -->
                            <uni-data-checkbox v-model="form.data.agree" multiple :localdata="defData.agreeList"
                                class="inline-block" /><text class="text-red text-14px lh-14px inline-block"
                                @click="onAgreeText(1)">
                                《工游记用户协议》
                            </text>与<text class="text-red text-14px lh-14px inline-block" @click="onAgreeText(2)">
                                《工游记隐私政策》
                            </text>
                            <!-- </view> -->
                        </uni-forms-item>
                    </uni-forms>
                    <view>
                        <!-- <button>登录</button> -->
                        <button type="warn" @click="onSubmit">
                            注 册
                        </button>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { ApiCommon, ApiLogin } from '@/service'

const formRef = ref<UniHelper.UniForms>()

const defData = reactive({
    tabItems: ['密码登录', '验证码登录'],
    current: 0,
    send: {
        time: 0,
        visible: false,
        text: '',
    },
    agreeList: [{ value: 1, text: '我已阅读并同意' }],
})

const form = reactive({
    data: {
        phone: '', // 手机号码
        password: '', // 密码
        code: '', // 验证码
        agree: [], // 同意协议
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
                patten: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                errorMessage: '请填写正确的手机号码',
            },
        ],
        // 当前表单域的字段中文名，可不填写
        // label: '姓名',
        validateTrigger: 'submit',
    },
    agree: {
        rules: [
            { required: true, errorMessage: '请同意并勾选用户政策与隐私协议' },
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
 * 查看协议
 * @param type  1|2
 */
const onAgreeText = (type: 1 | 2) => {

}

/**
 * 获取验证码
 */
const getCode = async () => {
    if (defData.send.visible) return

    const validate = await formRef.value?.validateField(['phone'])
    if (!validate) return

    const res = await ApiCommon.sendCode({ phone: form.data.phone, type: 1 })

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

    const data: ILoginCommonSignup = {
        type: 3,
        phone: form.data.phone,
        validate_code: form.data.code,
        register_type: 'wechat_app',
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
    font-size: 14px;
    padding: 10px 20px 20px;

    margin-top: 20px;

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

    :deep(.uni-data-checklist .checklist-box) {
        margin-right: 0;
    }
}
</style>
