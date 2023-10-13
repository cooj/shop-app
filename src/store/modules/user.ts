import { defineStore } from 'pinia'
import { ApiUser } from '@/service'

export const useUserStore = defineStore('user', () => {
    // 用户信息
    const user = ref<IGetUserResponse>()

    /**
     * 获取用户信息
     * @returns
     */
    const getUserInfo = async () => {
        const res = await ApiUser.getUser()

        user.value = res.code === 200 ? res.data : undefined

        return user
    }

    return { user, getUserInfo }
})
