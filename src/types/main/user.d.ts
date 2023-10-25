
/**
 * 获取用户信息 - 响应数据
 */
declare interface IGetUserResponse {
    token: string;
    "user_id": 1,
    "user_name": "张三",
    "phone": "13410985888",
    "email": "admin@qq.co",
    "add_time": 0,
    "last_login": 1681807583,
    "last_ip": "127.0.0.1",
    "level_id": 2,
    "openid": "",
    "unionid": "",
    "headimgurl": "https://goyojo.oss-cn-shenzhen.aliyuncs.com/20230420/202304201450139203.gif",
    "peas": 3,
    "attest_status": 1,
    "type": 2,
    "enterprise_name": "腾讯xxx",
    "nickname": "微信昵称",
    "email_status": 0
}

// 用户登录，基础参数
declare interface ILoginCommon {
    type: number,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号

    phone: string,// 手机号/账号（类型为1,2,3,4传）

    // password: string;    // 密码 （类型为1传）
    // validate_code: string;   // 验证码 （类型为2,3,4传）
    // nickname: string;    // 微信昵称（类型为4传）
    // openid: string;  // 微信openid（类型为4传）
    // unionid: string; // 微信unionid（类型为4传）
    // headimgurl: string;  // 微信头像（类型为4传）
    // share_id: string;    // 推荐人id （类型为2，3,4传）
    // salesman_id: number; // 业务员ID
    // register_type: 'pc' | 'wechat_app';  //注册类型 pc端 wechat_app小程序
}


// 用户登录，密码登录
declare interface ILoginCommonPassword extends ILoginCommon {
    type: 1,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号
    password: string;    // 密码 （类型为1传）
}


// 用户登录，验证码登录
declare interface ILoginCommonCode extends ILoginCommon {
    type: 2,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号
    validate_code: string;   // 验证码 （类型为2,3,4传）
    share_id?: string;    // 推荐人id （类型为2，3,4传）

}


// 用户登录，注册登录
declare interface ILoginCommonSignup extends ILoginCommon {
    type: 3,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号

    validate_code: string;   // 验证码 （类型为2,3,4传）
    share_id?: string;    // 推荐人id （类型为2，3,4传）
    register_type: 'pc' | 'wechat_app';  //注册类型 pc端 wechat_app小程序
}


// 用户登录，微信扫码登录
declare interface ILoginCommonWechat extends ILoginCommon {
    type: 4,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号

    validate_code: string;   // 验证码 （类型为2,3,4传）
    nickname: string;    // 微信昵称（类型为4传）
    openid: string;  // 微信openid（类型为4传）
    unionid: string; // 微信unionid（类型为4传）
    headimgurl: string;  // 微信头像（类型为4传）
    share_id: string;    // 推荐人id （类型为2，3,4传）
}


/**
 * 我的留言 添加 请求参数
 */
declare interface UserFeedBackApi_add {
    type: number //类型 1建议 2投诉 3商品 4其他 5店铺投诉 6订单问题
    content: string // 内容
}

/**
 * 企业认证 请求参数
 */
declare interface UserCertifiedApi_attest {
    enterprise_name: string //企业名称
    enterprise_code: string //企业信用代码
    enterprise_account: string //企业账号
    enterprise_contacts: string  //企业联系人
    contacts_post: string  //企业联系人职务
    contacts_phone: string  //企业联系人职务
    contacts_email: string  //企业联系人邮箱
    enterprise_industry: string  //所属行业
    enterprise_capital: number  //注册资金
    enterprise_address: string  //企业地址
    enterprise_remark: string  //企业备注
    // enterprise_file: string //企业认证上传资料
}

/**
 * 企业查询 响应数据
 */
declare interface UserCertifiedApi_infoResponse {
    "attest_status": 0 | 1 | 2 | 3, //认证状态：0未认证，1已认证，2审核中，3未通过
    "failed_remark": string, //未通过原因
    "enterprise_name": string, //企业名称
    "enterprise_code": string, //企业信用代码
    "enterprise_account": string, //企业账号
    "enterprise_contacts": string, //企业联系人
    "contacts_post": string, //企业联系人职务
    "contacts_phone": string, //企业联系人电话
    "contacts_email": string, //企业联系人邮箱
    "enterprise_industry": string, //所属行业
    "enterprise_capital": number, //注册资金
    "enterprise_address": string, //企业地址
    "enterprise_remark": string, //企业备注
    "enterprise_file": string //企业认证上传资料
}

/**
 * 收藏浏览 -列表 请求参数
 */
declare interface UserCollectionApi_getList {
    type: 1 | 2 //1用户收藏列表，2用户最近浏览列表
    is_paging: 0 | 1
}

/**
 * 收藏浏览 - 列表 响应数据
 */
declare interface UserCollectionApi_getListResponse {
    "lists": {
        "goods_id": number,
        "goods_sn": string,
        "is_collect": number,
        "collect_time": string,
        "is_recent": number,
        "recent_time": string,
        "goods_name": string,
        "goods_img": string,
        "shop_price": string,
    }[],
    "total": number,
}

/**
 * 收藏浏览 - 删除 请求参数
 */
declare interface UserCollectionApi_del {
    goods_ids: string //商品id，多个以英文逗号分隔
    type: 1 | 2 // 1清除收藏，2清除最近浏览
}

/**
 * 个人中心-我的工游豆 请求参数
 */
declare interface UserPeasApi_getList {
    page?: number, //分页页码，数字类型
    page_size?: number, //每页数量
    type: 0 | 1 | 2 //类型 1收入 2支出 0显示全部
}

/**
 * 个人中心-我的工游豆 响应数据
 */
declare interface UserPeasApi_getListResponse {
    "lists": {
        "peas": number, //收入支出工游豆
        "remarks": string, //来源、用途
        "create_at": string, //时间
        "type": 1 | 2 | 0 //类型 1收入 2支出
    }[],
    "total": number,
    "peas": number,//总的工游豆
}

/**
 * 个人中心 - 我的优惠券 请求参数
 */
declare interface UserCouponApi_getList {
    is_status: 1 | 2 | 3 | 4 //状态 1未使用 2使用中 3已使用 4已过期
}

/**
 * 个人中心 -  我的优惠券 响应数据
 */
declare interface UserCouponApi_getListResponse {
    "lists": {
        "id": number, //记录ID
        "coupon_id": number, //优惠券ID
        "is_status": number, //使用状态 1未使用 3已使用 4已过期
        "add_time": string, //创建时间
        "start_time": string, //开始时间
        "end_time": string, //结束时间
        "coupon_name": string, //优惠券名称
        "type": number, //类型 通用券 2品类券
        "par_value": string, //面值
        "img_url": string //图片理解
    }[],
    "total": number
}