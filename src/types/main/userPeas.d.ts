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