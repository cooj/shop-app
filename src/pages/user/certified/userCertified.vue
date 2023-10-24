<template>
    <view class="container">
        <uni-forms ref="formRef" :model-value="form" label-width="105px" :rules="rules">
            <uni-forms-item label="企业名称" name="enterprise_name" required>
                <uni-easyinput v-model="form.enterprise_name" trim placeholder="请输入企业名称" />
            </uni-forms-item>
            <uni-forms-item label="企业信用代码" name="enterprise_code" required>
                <uni-easyinput v-model="form.enterprise_code" trim placeholder="请输入企业信用代码" />
            </uni-forms-item>
            <uni-forms-item label="企业账号" name="enterprise_account" required>
                <uni-easyinput v-model="form.enterprise_account" placeholder="请输入企业账号" />
            </uni-forms-item>
            <uni-forms-item label="企业联系人" name="enterprise_contacts" required>
                <uni-easyinput v-model="form.enterprise_contacts" placeholder="请输入企业联系人" />
            </uni-forms-item>
            <uni-forms-item label="联系人职务" name="contacts_post" required>
                <uni-easyinput v-model="form.contacts_post" placeholder="请输入联系人职务" />
            </uni-forms-item>
            <uni-forms-item label="联系人电话" name="contacts_phone" required>
                <uni-easyinput v-model="form.contacts_phone" placeholder="请输入联系人电话" />
            </uni-forms-item>
            <uni-forms-item label="联系人邮箱" name="contacts_email" required>
                <uni-easyinput v-model="form.contacts_email" placeholder="请输入联系人邮箱" />
            </uni-forms-item>
            <uni-forms-item label="所属行业" name="enterprise_industry" required>
                <uni-easyinput v-model="form.enterprise_industry" placeholder="请输入所属行业" />
            </uni-forms-item>
            <uni-forms-item label="注册资金" name="enterprise_capital" required>
                <uni-easyinput v-model="form.enterprise_capital" placeholder="请输入注册资金" />
            </uni-forms-item>
            <uni-forms-item label="企业地址" name="enterprise_address" required>
                <uni-easyinput v-model="form.enterprise_address" placeholder="请输入企业地址" />
            </uni-forms-item>
            <uni-forms-item label="企业备注" name="enterprise_remark" required>
                <uni-easyinput v-model="form.enterprise_remark" placeholder="请输入企业备注" />
            </uni-forms-item>
        </uni-forms>
        <button type="warn" @click="onSubmit()">
            确定
        </button>
    </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UserCertifiedApi } from '@/service'

// import { useUserStore } from '@/store'

// const userStore = useUserStore()
const formRef = ref<UniHelper.UniForms>()

const form = reactive({
    enterprise_name: '',
    enterprise_code: '',
    enterprise_account: '',
    enterprise_contacts: '',
    contacts_post: '',
    contacts_phone: '',
    contacts_email: '',
    enterprise_industry: '',
    enterprise_capital: '',
    enterprise_address: '',
    enterprise_remark: '',
})

const rules = reactive({
    contacts_phone: {
        rules: [
            { required: true, errorMessage: '请输入联系人电话' },
            {
                pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                errorMessage: '请填写正确的手机号码',
            },
        ],
        validateTrigger: 'submit',
    },
    enterprise_name: {
        rules: [
            { required: true, errorMessage: '请输入企业名称' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_code: {
        rules: [
            { required: true, errorMessage: '请输入企业信用代码' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_account: {
        rules: [
            { required: true, errorMessage: '请输入企业账号' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_contacts: {
        rules: [
            { required: true, errorMessage: '请输入企业联系人' },
        ],
        validateTrigger: 'submit',
    },
    contacts_post: {
        rules: [
            { required: true, errorMessage: '请输入联系人职务' },
        ],
        validateTrigger: 'submit',
    },
    contacts_email: {
        rules: [
            { required: true, errorMessage: '请输入联系人邮箱' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_industry: {
        rules: [
            { required: true, errorMessage: '请输入所属行业' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_capital: {
        rules: [
            { required: true, errorMessage: '请输入注册资金' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_address: {
        rules: [
            { required: true, errorMessage: '请输入企业地址' },
        ],
        validateTrigger: 'submit',
    },
    enterprise_remark: {
        rules: [
            { required: true, errorMessage: '请输入企业备注' },
        ],
        validateTrigger: 'submit',
    },
})
// 确定
const onSubmit = async () => {
    const validate = await formRef.value?.validate()
    if (!validate) return

    const data: UserCertifiedApi_attest = {
        enterprise_name: form.enterprise_name,
        enterprise_code: form.enterprise_code,
        enterprise_account: form.enterprise_account,
        enterprise_contacts: form.enterprise_contacts,
        contacts_post: form.contacts_post,
        contacts_phone: form.contacts_phone,
        contacts_email: form.contacts_email,
        enterprise_industry: form.enterprise_industry,
        enterprise_capital: Number(form.enterprise_capital),
        enterprise_address: form.enterprise_address,
        enterprise_remark: form.enterprise_remark,
        // enterprise_file: form.enterprise_file,
    }
    const { data: res } = await UserCertifiedApi.attest(data)
    if (res.code !== 200) return showErrorModal(res.msg)
    uni.showModal({ title: '提交成功', showCancel: false })
}

// 页面加载时
onMounted(async () => {
    // const a = await UserCertifiedApi.info()
    // console.log('a :>> ', a.data)
})
</script>

<style lang="scss" scoped>
.container {
    padding:15px;
    background-color: #fff;
}
</style>
