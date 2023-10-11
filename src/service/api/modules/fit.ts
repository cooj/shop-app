import { get } from '@/service/request'

/**
 * 设置-相关接口
 */
export const FitPasswordApi = {
    /**
     * 修改密码接口
     */
    edit: (data: FitPasswordApi_edit) => get('/api/mall/edit_pwd', data),
}

/**
 * 设置-修改手机号接口
 */
export const FitPhoneApi = {
    /**
     *提交身份验证(忘记密码和修改手机号)
     */
    getCode: (data: FitPhoneApi_getCode) => get<FitPhoneApi_getCodeResponse>('/api/mall/set_iden', data),
    /**
     * 修改手机号
     */
    edit: (data: FitPhoneApi_edit) => get('/api/mall/edit_phone', data),
}

/**
 * 找回密码
 */
export const ForgetPasswordApi = {
    edit: (data: ForgetPasswordApi_edit) => get('/api/mall/set_pwd', data),
}
