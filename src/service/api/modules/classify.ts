import { post } from '@/service/request'

export const ClassifyApi = {
    /**
     * 首页 -- 获取分类列表
     * @returns
     */
    getList: () => post<ClassifyApi_getListResponse[]>('/api/mobile/goods_category/index'),
}
