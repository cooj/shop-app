import { apiRequest } from '@/service/request'

interface BannerApi_getListResponse {
    'banner_id': number // id
    'banner_link': string // 链接
    'banner_img': string // 图片
    'sort': number // 排序
    'enabled': 1 | 0 // 1是 0否
}

/**
 * 首页 -- 获取banner
 * @returns
 */
export const BannerApi = () => apiRequest.get<BannerApi_getListResponse[]>({
    url: '/api/mobile/index/get_banner',
})
