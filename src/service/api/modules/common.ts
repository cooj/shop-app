import { get, post } from '@/service/request'

/**
 * 公用api接口
 */
export const ApiCommon = {
    /**
     * 商城 -- 发送短信验证码
     * @param data
     * @returns
     */
    sendCode: (data: ISendCode) => post<number>('/api/mall/sms_code', data),

    /**
     * 商城 -- 根据关键词搜索商品
     * @param data
     * @returns
     */
    searchGoods: (data: { keyword: string }) => get<ISearchGoodsResponse>('/api/common/goods_search', data),

}
