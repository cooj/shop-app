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

/**
 * 首页 - 获取品牌 请求参数
 */
declare interface BrandApi_getList {
    is_paging?: 0 | 1
    page?: number
    page_size?: number
}

/**
 * 首页 - 获取品牌 响应数据
 */
declare interface BrandApi_getListResponse {
    "lists": {
        "brand_id": number, //id
        "brand_name": string, //名称
        "brand_logo": string, //logo
        "brand_desc": string, //描述
        "site_url": string, //url
        "sort": number, //排序
        "is_show": 0 | 1, //是否显示
        "is_index": 0 | 1//是否首页显示
    }[],
    "total": number
}