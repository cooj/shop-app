<template>
    <view class="page">
        <view class="logo">
            <!-- <image src="../../static/logo.png" mode="" /> -->
        </view>
        <!-- 填写区 -->
        <view class="input-info">
            <view class="w80% h500rpx p-4">
                <view class="w100% h80rpx">
                    <text @click="loginClick">
                        密码登录
                    </text>
                    <text @click="validateClick">
                        验证码登录
                    </text>
                </view>
                <view class="info">
                    <input v-model="form.phone" type="tel" maxlength="11" placeholder="手机号">
                    <view class="more" />
                </view>
                <view v-if="defData.type === 1" class="info">
                    <input v-model="form.password" placeholder="请输入密码">
                    <view class="more" />
                </view>
                <view v-else class="info">
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
                <view>
                    <text>
                        忘记密码？
                    </text>
                    <text @click="registerRoute">
                        立即注册
                    </text>
                </view>
                <view class="btn-info">
                    <view class="btn">
                        <text>登录</text>
                    </view>
                </view>
            </view>
        </view>

        <!-- 操作 -->
        <view class="operation">
            <text />
            <text />
        </view>
        <!-- 其他方式登录 -->
        <view class="other-ways">
            <text>其他登录方式</text>
        </view>
        <!-- 登录方式 -->
        <view class="login-way">
            <view class="way" @click="wxRoute">
                <image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" class="login-image" />
                <text>
                    微信登录
                </text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
const form = reactive({
    phone: '',
    code: '',
    password: '',
})

const defData = reactive({
    type: 1, // 1账户登录 2验证码登录
})

const wxRoute = () => {
    uni.navigateTo({
        url: '/pages/login/wxLogin/wxLogin',
    })
}
const registerRoute = () => {
    uni.navigateTo({
        url: '/pages/register/register',
    })
}

// 点击账号登录
const loginClick = () => {
    defData.type = 1
}

// 点击验证码登录
const validateClick = () => {
    defData.type = 2
}
</script>

<style scoped>
.page {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240rpx;

  image {
    width: 160rpx;
    height: 160rpx;
  }
}

/* 填写 */
.input-info {
  padding: 0 6%;
  width: 100%;
  height: auto;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100rpx;
    border-bottom: 2rpx solid #f6f6f6;

    input {
      width: 70%;
      height: 100%;
      font-size: 26rpx;
      color: #222222;
    }

    .more {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30%;
      height: 100%;

      .iconfont {
        font-size: 34rpx;
      }

      .mo {
        font-size: 26rpx;
        padding-left: 20rpx;
        margin-left: 10rpx;
        border-left: 2rpx solid #EEEEEE;
      }
    }
  }

  /* 按钮 */
  .btn-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100rpx;
    margin-top: 60rpx;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      height: 60rpx;
      background-color: #fa5215;
      color: #FFFFFF;
      font-size: 28rpx;
    }
  }
}

/* 操作 */
.operation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  height: 80rpx;

  text {
    font-size: 28rpx;
    color: #555555;
  }
}

/* 其他 */
.other-ways {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80rpx;
  margin-top: 100rpx;

  text {
    font-size: 28rpx;
    color: #999999;
  }
}

.other-ways::after {
  content: "";
  width: 36%;
  height: 2rpx;
  background-color: #EEEEEE;
}

.other-ways::before {
  content: "";
  width: 36%;
  height: 2rpx;
  background-color: #EEEEEE;
}

/* 登录方式 */
.login-way {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200rpx;

  .way {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

    image {
      width: 100rpx;
      height: 100rpx;
    }

    text {
      font-size: 28rpx;
      color: #959595;
      margin-top: 20rpx;
    }
  }
}

.login-image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
</style>
