import { apiRequest } from '@/service/request'

interface IUser {
    name: string
    age: number
}

interface ILoginParam {
    username: string
    password: number
}

/**
 * 用户登录
 * @returns
 */
export const setLoginSing = (data: ILoginParam) => apiRequest.post<IUser>({
    url: 'xxxxxxxxxxxx/user',
    data,
})
