/**
 * 首页 -- 获取分类列表 响应数据
 */
declare interface ClassifyApi_getListResponse {
    'cat_id': number
    'pid': number
    'cat_code': string
    'cat_name': string
    'sort': number
    'img': string
    'pid_arr': []
    "children": ClassifyApi_getListResponse[]
}