import { get } from '@/service/request'

/**
 * 设置-修改密码接口
 */
export const FitPasswordApi = {
    /**
     * 修改密码
     */
    edit: (data: FitPasswordApi_edit) => get('/api/mall/edit_pwd', data),

}
