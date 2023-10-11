/**
 * 提交身份验证 请求参数
 */
declare interface FitPhoneApi_getCode {
    phone: string //当前手机号
    sms_code: string
    plate_type: 1 | 2 // 2小程序
}

/**
 * 设置-修改手机号 请求参数
 */
declare interface FitPhoneApi_edit {
    phone: string //新手机号
    sms_code: string //短信验证码
}