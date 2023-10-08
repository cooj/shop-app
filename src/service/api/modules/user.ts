import { get, post } from '@/service/request'

/**
 * 用户相关api接口
 */
export const ApiUser = {
    /**
     * 获取用户信息
     * @param data
     * @returns
     */
    getUser: () => get<IGetUserResponse>('/api/mall/get_user_info'),

}

/**
 * 登录、注册相关api接口
 */
export const ApiLogin = {
    /**
     * 获取登录验证码
     * @param data
     * @returns
     */
    getCode: () => post<number>('/api/admin_auth/validate_code'),

    /**
     * 商城 -- 登录注册
     * @param data
     * @returns
     */
    login: (data: ILoginCommonPassword | ILoginCommonCode | ILoginCommonSignup | ILoginCommonWechat) => post<IGetUserResponse>('/api/mall/login', data),

}
