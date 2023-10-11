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