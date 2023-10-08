/**
 * 商城 -- 发送短信验证码
 */
declare interface ISendCode {
    phone: string;   // 手机号码
    type: 1 | 2 | 3 | 4 | 5 | 6;   // 类型 1注册 2登录 3找回 4修改手机号 5审核通知(前端不能使用) 6其他短信验证码
}



/**
 * 根据关键词搜索商品 - 响应数据
 */
declare interface ISearchGoodsResponse {
    "list": {
        "goods_id": 1, //商品ID
        "goods_name": "红钐 按键寿命试验机 HSL-TA4 四工位", //商品名称
        "goods_code": "HSL-TA4", //型号
        "cat_id": 3, //商品类型ID
        "cat_name": "按键寿命试验机" //商品类型名称
    }[]
}