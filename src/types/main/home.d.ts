/**
 * 首页 - 轮播图 响应数据
 */
declare interface BannerApi_getListResponse {
    'banner_id': number // id
    'banner_link': string // 链接
    'banner_img': string // 图片
    'sort': number // 排序
    'enabled': 1 | 0 // 1是 0否
}