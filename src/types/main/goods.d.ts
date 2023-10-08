/**
 * 商品详情 - 响应数据
 */

declare interface IGoodsDetailResponse {
    "goods_info": {
        "goods_id": 1,
        "goods_name": "红钐 按键寿命试验机 HSL-TA4 四工位",
        "goods_img": "https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230104/202301040927291851.jpg?x-oss-process=image/quality,Q_50",
        "goods_sn": "AA00001",
        "goods_code": "HSL-TA4",
        "shop_price": "914.21",
        "is_best": 0,
        "is_new": 1,
        "is_hot": 0,
        "cat_id": 1322,
        "brand_id": 1,
        "goods_desc": "<p><img src=\"https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230104/202301040928037947.jpg?x-oss-process=image/quality,Q_50\" alt=\"\" width=\"790\" height=\"16851\" /></p>",
        "web_title": "",
        "web_desc": "",
        "web_keywords": "",
        "is_sale": 1,
        "is_collect": 1,
        "coupon_list": {    // 商品可用优惠券
            "coupon_id": 26,
            "coupon_name": "618大促销",
            "par_value": "10.00",
            "is_threshold": 0,
            "lowest": 0
        }[]
    },
    "photo_lists": {    // 商品相册
        "photo_url": "https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230725/202307251343165243.jpg?x-oss-process=image/quality,Q_50",
        "sort": 1
    }[],
    "link_lists": { // 关联商品
        "goods_id": 9,
        "goods_name": "南京炯雷 安全网燃烧性能阻燃测试仪 JL-5725",
        "goods_sn": "AA00009",
        "goods_img": "https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230201/202302011904223305.jpg?x-oss-process=image/quality,Q_50",
        "shop_price": "0.00"
    }[]
}