/**'
 * 设置-修改密码 请求参数
 */
declare interface FitPasswordApi_edit {
    password: string // 当前密码
    confirm_password: string // 新密码
}