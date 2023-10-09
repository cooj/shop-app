import { apiRequest } from '@/service/request'

interface ClassifyApi_getListResponse {
    'cat_id': number
    'pid': number
    'cat_code': string
    'cat_name': string
    'sort': number
    'img': string
    'pid_arr': []
    children: ClassifyApi_getListResponse[]
}

/**
 * 首页 -- 获取分类列表
 * @returns
 */
export const ClassifyApi = () => apiRequest.get<ClassifyApi_getListResponse[]>({
    url: 'http://scdevapi.goyojo.com/api/mobile/goods_category/index',
})
