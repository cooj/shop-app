<template>
    <view>
        <view class="mb5 ml5 mt1">
            <text class="text-lg">
                请填写以下注册信息
            </text>
        </view>

        <view class="input-info">
            <view class="info">
                <input v-model="form.phone" type="tel" maxlength="11" placeholder="请输入您的手机号">
                <view class="more" />
            </view>
            <view class="info">
                <input v-model="form.code" type="tel" maxlength="6" placeholder="请输入验证码">
                <view class="more">
                    <text class="mo">
                        获取验证码
                    </text>
                    <text class="mo" style="display: none">
                        59秒后重试
                    </text>
                </view>
            </view>
        </view>

        <view class="mt2 ml5 text-2">
            <label>
                <checkbox-group @change="handleCheckRead">
                    <label>
                        <checkbox value="true" />
                        <text>我已阅读并同意<text class="c-#fa5215">《用户协议》</text>和<text class="c-#fa5215">《隐私协议》</text></text>
                    </label>
                </checkbox-group>
            </label>
        </view>

        <view class="btn-info">
            <view class="btn">
                <text>注册</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    code: '',
    phone: '',
})

// 勾选框
const handleCheckRead = ({ detail }: { detail: any }) => {
    // form.isRead = !!detail.value.length
}
</script>

<style scoped>
/* 填写 */
.input-info{
    padding: 0 6%;
    .info{
      display: flex;
      align-items:center;
      justify-content: space-between;
      width: 100%;
      height: 100rpx;
      border-bottom: 2rpx solid #f2ecec;
      input{
        width: 70%;
        height: 100%;
        font-size: 26rpx;
        color: #222222;
      }
      .more{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 30%;
        height: 100%;
        .mo{
          font-size: 26rpx;
          padding-left: 20rpx;
          margin-left: 10rpx;
        }
      }
    }
  }

  /* 按钮 */
.btn-info{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100rpx;
    margin-top: 60rpx;
    .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      height: 60rpx;
      background-color: #fa5215;
      border-radius: 100rpx;
      color: #FFFFFF;
      font-size: 28rpx;
    }
  }
</style>
