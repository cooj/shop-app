
/**
 * 获取用户信息 - 响应数据
 */
declare interface IGetUserResponse {
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
    
    password: string;    // 密码 （类型为1传）
    validate_code: string;   // 验证码 （类型为2,3,4传）
    nickname: string;    // 微信昵称（类型为4传）
    openid: string;  // 微信openid（类型为4传）
    unionid: string; // 微信unionid（类型为4传）
    headimgurl: string;  // 微信头像（类型为4传）
    share_id: string;    // 推荐人id （类型为2，3,4传）
    salesman_id: number; // 业务员ID
    register_type: 'pc' | 'wechat_app';  //注册类型 pc端 wechat_app小程序
}


// 用户登录，密码登录
declare interface ILoginCommonPassword extends ILoginCommon{
    type: 1,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号
    password: string;    // 密码 （类型为1传）
}


// 用户登录，验证码登录
declare interface ILoginCommonCode extends ILoginCommon{
    type: 2,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号
    validate_code: string;   // 验证码 （类型为2,3,4传）
    share_id: string;    // 推荐人id （类型为2，3,4传）

}


// 用户登录，注册登录
declare interface ILoginCommonSignup extends ILoginCommon{
    type: 3,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号

    validate_code: string;   // 验证码 （类型为2,3,4传）
    share_id: string;    // 推荐人id （类型为2，3,4传）
    register_type: 'pc' | 'wechat_app';  //注册类型 pc端 wechat_app小程序
}


// 用户登录，微信扫码登录
declare interface ILoginCommonWechat extends ILoginCommon{
    type: 4,    //类型 1账户登录 2验证码登录 3注册 4微信扫码绑定手机号

    validate_code: string;   // 验证码 （类型为2,3,4传）
    nickname: string;    // 微信昵称（类型为4传）
    openid: string;  // 微信openid（类型为4传）
    unionid: string; // 微信unionid（类型为4传）
    headimgurl: string;  // 微信头像（类型为4传）
    share_id: string;    // 推荐人id （类型为2，3,4传）
}
