import { ERROR_STATUS, getServiceEnvConfig } from '@/config'
import { createError } from '@/utils'

/**
 * 添加token，请求拦截器
 */
export const tokenRequestInterceptor: requestInterceptor = (requestConfig: RequestConfig) => {
    const token = getStorage('token') || undefined

    const { secret = '' } = getServiceEnvConfig()

    const time = Date.now().toString()
    const sign = setSignRule(secret, time)

    requestConfig.header = {
        ...requestConfig.header,
        token,
        'verify-sign': `${sign}-${time}`,
    }

    return requestConfig
}

/**
 * 状态码响应拦截器
 */
export const statusResponseInterceptor: responseInterceptor = (result) => {
    const { statusCode } = result

    if (statusCode !== 200) {
        throw createError(ERROR_STATUS[statusCode])
    }

    return result
}

/**
 * 返回值响应拦截器
 */
export const resultResponseInterceptor: responseInterceptor = (result) => {
    const resultData = result.data as Result<string>

    if (resultData.success === 'false') {
        throw createError(resultData.msg)
    }

    return result
}
