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

/**
 * 我的留言 APi
 */
export const UserFeedBackApi = {
    /**
     * 添加
     */
    add: (data: UserFeedBackApi_add) => post('/api/mall_user/add_comment', data),
    // 列表
    getList: (data: UserFeedBackApi_getList) => post<UserFeedBackApi_getListResponse>('/api/mall_user/comment_lists', data),
}

/**
 *个人中心 企业认证
 */
export const UserCertifiedApi = {
    // 企业认证
    attest: (data: UserCertifiedApi_attest) => post('/api/mall_user/enterprise_attest', data),
    // 企业查询
    info: () => post<UserCertifiedApi_infoResponse>('/api/mall_user/enterprise_info'),
}

/**
 * 个人中心  收藏浏览Api
 */
export const UserCollectionApi = {
    // 列表
    getList: (data: UserCollectionApi_getList) => post<UserCollectionApi_getListResponse>('/api/mall_user/get_goods_record', data),
    // 删除
    del: (data: UserCollectionApi_del) => post('/api/mall_user/clear_goods_record', data),

}

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

/**
 * 我的优惠券接口
 */
export const UserCouponApi = {
    /**
     * 获取优惠券信息
     * @param data
     * @returns
     */
    getList: (data: UserCouponApi_getList) => get<UserCouponApi_getListResponse>('/api/mall/get_coupon_list', data),

}

/**
 * 问答列表接口
 */
export const UserQuestionApi = {
    /**
     * 问答列表
     * @param data
     * @returns
     */
    getList: (data: UserQuestionApi_getList) => get<UserQuestionApi_getListResponse>('/api/mall_user/get_goods_question', data),
    /**
     * 删除
     */
    del: (data: UserQuestionApi_del) => post('/api/mall_user/del_goods_question', data),
}
