/**'
 * 设置-修改密码 请求参数
 */
declare interface FitPasswordApi_edit {
    password: string // 当前密码
    confirm_password: string // 新密码
}

/**
 * 提交身份验证 请求参数
 */
declare interface FitPhoneApi_getCode {
    phone: string //当前手机号
    sms_code: string
    plate_type: 1 | 2 // 2小程序
}
/**
 * 提交身份验证（忘记密码） 响应数据
 */
declare interface FitPhoneApi_getCodeResponse {
    "code": string //密码验证码
}

/**
 * 设置-修改手机号 请求参数
 */
declare interface FitPhoneApi_edit {
    phone: string //新手机号
    sms_code: string //短信验证码
}

/**
 * 找回密码 提交 请求参数
 */
declare interface ForgetPasswordApi_edit {
    password: string // 密码
    define_password: string // 新密码
    phone: string //手机号
    code: string //密码验证码
}

/**
 * 商城设置 响应数据
 */
declare interface FitInfoApi_getListResponse {
    "shop_name": string, //商城名称
    "shop_title": string, //商城标题
    "shop_describe": string, //商城描述
    "shop_status": "0", //关闭网站
    "status_cause": string, //关闭原因
    "shop_logo":string, //商城logo地址
    "user_promulgate":string, //用户中心公布
    "shop_promulgate": string, //商城公布
    "logon_status": "0", //注册状态
    "icp": string, //icp备案证书号
    "watermark_file": string, //水印文件
    "watermark_seat": "0", //水印位置
    "watermark_pellucidity": "50", //水印透明度
    "matrixing_scale": "10", //工游豆换算比例
    "pay_scale": "10", //工游豆支付比例
    "give": "100", //会员注册赠送工游豆
    "tacit_img": string, //商城默认图片
    "is_legumes": "1", //是否使用工游豆
    "is_coupon": "1", //是否使用优惠券
    "is_short": "0", //是否使用缺货处理
    "is_bill": "1", //是否开票
    "user_id": "12333", //用户id
    "api_key": "54544", //API Key
    "company_code": "1101", //物流公司编号
    "is_recom": "1", //推荐设置
    "recom_give": "100", //注册分成数
    "seo_keywords":string,
    "ico_img": string,
    "small_logo":string,
    "sale_tel":string,
    "work_time": string,
    "wx_code":string,
    "copyright": string,
    "filings":string,
    "filings_url": string,
    "footer_content": string,
    "hot": string,
    "agreement": string, //服务协议
    "policy": string, //隐私政策
    "bank_info": "{\"name\":\"深圳工游记集团有限公司12465646123\",\"company_name\":\"深圳工游记集团有限公司12465646123\",\"bank_account\":\"4564641454785385761234\",\"bank_name\":\"深圳农商银行\",\"bank_cnaps\":\"4564641454785385761234\",\"notes\":\"55555\",\"duty\":\"4564641454785385761234\",\"phone\":\"15766875587\",\"address\":\"广东省深圳市光明去一片光明\",\"item_notes\":\"<p>注意事项0000<\\/p>\"}",
    "order_day_num": "14"
}