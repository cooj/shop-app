import { apiRequest } from '@/service/request'

/**
 * 获取商品详情信息
 * @returns
 */
export const getGoodsDetail = (data: { goods_sn: string }) => apiRequest.get<IGoodsDetail>({
    url: '/api/mobile/goods_detail/index',
    // url: '/api/goods_detail/index',
    // url: 'https://httpbin.org/get',
    data,
})
