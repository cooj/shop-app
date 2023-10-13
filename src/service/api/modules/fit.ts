import { get, post } from '@/service/request'

/**
 * 设置-相关接口
 */
export const FitPasswordApi = {
    /**
     * 修改密码接口
     */
    edit: (data: FitPasswordApi_edit) => post('/api/mall/edit_pwd', data),
}

/**
 * 设置-修改手机号接口
 */
export const FitPhoneApi = {
    /**
     *提交身份验证(忘记密码和修改手机号)
     */
    getCode: (data: FitPhoneApi_getCode) => post<FitPhoneApi_getCodeResponse>('/api/mall/set_iden', data),
    /**
     * 修改手机号
     */
    edit: (data: FitPhoneApi_edit) => post('/api/mall/edit_phone', data),
}

/**
 * 找回密码
 */
export const ForgetPasswordApi = {
    edit: (data: ForgetPasswordApi_edit) => post('/api/mall/set_pwd', data),
}

/**
 * 商城设置
 */
export const FitInfoApi = {
    getList: () => get<FitInfoApi_getListResponse>('/api/index/setup_info'),
}

/**
 * 设置-解绑微信
 */
export const FitWeChatApi = {
    del: () => get('/api/mall/del_openid'),
}
