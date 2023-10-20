import { get } from '@/service/request'

/**
 * 首页 轮播图
 */
export const BannerApi = {
    /**
     * 获取banner
     * @param data
     * @returns
     */
    getList: () => get<BannerApi_getListResponse[]>('/api/mobile/index/get_banner'),
}
