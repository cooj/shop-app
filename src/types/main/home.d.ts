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

/**
 * 首页 - 获取分类商品 响应数据
 */
declare interface CateGoodsApi_getListResponse {
    "cate_id": number, //分类id
    "cate_name": string, //分类名称
    "sort": number, //排序
    "goods_lists": {
        "goods_id": number, //商品id
        "goods_sn": string, //商品编号
        "goods_name": string, //商品名称
        "goods_img": string, //商品主图
        "shop_price": string //商品本店价
    }[]
}