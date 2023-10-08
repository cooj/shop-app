import { createRequest } from './request'
import { resultResponseInterceptor, statusResponseInterceptor, tokenRequestInterceptor } from './interceptors'
import { getServiceEnvConfig } from '@/config'

const { url, json = '' } = getServiceEnvConfig(import.meta.env)

export const apiRequest = createRequest({
    baseURL: url,
    returnData(val) {
        return val.data
    },
}, {
    requestInterceptors: [tokenRequestInterceptor],
    responseInterceptors: [statusResponseInterceptor, resultResponseInterceptor],
})

export const jsonRequest = createRequest({
    baseURL: json,
}, {
    responseInterceptors: [statusResponseInterceptor],
})

/**
 * post 请求
 * @param url 接口地址
 * @param data 请求参数
 * @param requestConfig 配置
 * @returns
 */
export const post = <T = any>(url: string, data?: any, requestConfig?: RequestConfig) => apiRequest.post<Result<T>>({
    url,
    data,
    ...requestConfig,
})

/**
 * get 请求
 * @param url 接口地址
 * @param data 请求参数
 * @param requestConfig 详细配置
 * @returns
 */
export const get = <T>(url: string, data?: any, requestConfig?: RequestConfig) => apiRequest.post<Result<T>>({
    url,
    data,
    ...requestConfig,
})
