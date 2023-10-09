import { get } from '@/service/request'

/**
 * 商品相关api接口
 */
export const ApiGoods = {

    /**
     * 获取商品详情信息
     * @param data
     * @returns
     */
    getInfo: (data: { goods_sn: string }) => get<IGoodsDetailResponse>('/api/mobile/goods_detail/index', data),

}
