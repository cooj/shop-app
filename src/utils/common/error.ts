import { isObject } from '@meoc/utils'

// import { IError } from '@/typings/error'

/**
 * 自定义错误 与微信错误类型一致(errMsg)
 */
export class IError extends Error {
    errMsg: string

    constructor(errMsg: string) {
        super(errMsg)
        this.errMsg = errMsg
    }
}

/**
 * 自定义错误
 * @param errMsg - 错误信息
 */
export function createError(errMsg: string) {
    return new IError(errMsg)
}

/**
 * 获取错误信息
 * @param err - 错误对象
 */
export function getErrorMsg(err: Error | IError | UniApp.GeneralCallbackResult | unknown) {
    if (isObject(err)) {
        return 'errMsg' in err ? err.errMsg : err.message
    }

    return ''
}
