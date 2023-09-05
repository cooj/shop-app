import { apiRequest } from '@/service/request'

interface IUser {
  name: string
  age: number
}

export function fetchUserInfo() {
    return apiRequest.post<IUser>({
        url: 'xxxxxxxxxxxx/user',
    })
}

// async () => {
//   const { age, name } = await fetchUserInfo()
// }
