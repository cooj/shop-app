
/**
 * 商城 -- 发送短信验证码
 */
declare interface ISendCode {
    phone: string;   // 手机号码
    type: 1 | 2 | 3 | 4 | 5 | 6;   // 类型 1注册 2登录 3找回 4修改手机号 5审核通知(前端不能使用) 6其他短信验证码
}