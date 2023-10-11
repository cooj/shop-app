import { get } from '@/service/request'

/**
 * 设置-修改手机号接口
 */
export const FitPhoneApi = {
    /**
     *提交身份验证
     */
    getCode: (data: FitPhoneApi_getCode) => get('/api/mall/set_iden', data),
    /**
     * 修改手机号
     */
    edit: (data: FitPhoneApi_edit) => get('/api/mall/edit_phone', data),
}
