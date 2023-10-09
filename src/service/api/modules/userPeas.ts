import { get } from '@/service/request'

/**
 * 我的工游豆接口
 */
export const UserPeasApi = {
    /**
     * 获取工游豆信息
     * @param data
     * @returns
     */
    getList: (data: UserPeasApi_getList) => get<UserPeasApi_getListResponse>('/api/mall/get_user_peas', data),

}
