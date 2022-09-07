<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="登录" class="nav-bar" />
    <!-- 表单 -->
    <van-form ref="form" class="form" @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="mobileRules"
      >
        <template #label>
          <!-- 输入框左侧文本label -->
          <span class="toutiao toutiao-shouji"></span>
        </template>
      </van-field>
      <van-field
        v-model="code"
        type="code"
        name="密码"
        placeholder="请输入验证码"
        :rules="codeRules"
        ><template #label
          ><span class="toutiao toutiao-yanzhengma"></span
        ></template>
        <!-- 验证码 -->
        <template #button>
          <van-button
            class="btn"
            block
            type="default"
            size="small"
            round
            native-type="button"
            v-if="isShowCodeBtn"
            @click="sendCode"
            >获取验证码</van-button
          >
          <van-count-down
            v-else
            :time="3 * 1000"
            format="ss秒"
            @finish="isShowCodeBtn = true"
          /> </template
      ></van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mobileRules, codeRules } from './rule'
// 引入API
import { login, sendCodeAPI } from '@/api'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      mobile: '',
      code: '',
      mobileRules,
      codeRules,
      isShowCodeBtn: true
    }
  },
  methods: {
    ...mapMutations(['SET_COUNT']),
    async onSubmit() {
      // submit事件只有表单校验通过以后会被触发
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const { data } = await login(this.mobile, this.code)
        this.SET_COUNT(data.data)
        // 跳转路由
        this.$router.push('/profile')
        // 成功提示
        this.$toast.success('登录成功')
      } catch (error) {
        //         细分一下失败：提示用户手机号和验证码
        //  如果是手机号或者验证码错了，用户能知道
        // error:1.js抛的错 2.axios封装的error对象
        // axios封装的error对象
        // error.response.data后端返回的数据
        // 后端返回的数据
        // error.response.status后端返回的状态码
        if (error.response && error.response.status === 400) {
          this.$toast.fail(error.response.data.message)
        } else {
          this.$toast.clear()
          throw error
        }
      }
    },
    loading() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
    },
    async sendCode() {
      //   .验证用户是否输入了有效的手机号
      // 1.form绑定ref
      // 2.$refs.form.validate(name)
      await this.$refs.form.validate('mobile')
      this.loading()
      //   1.发送请求
      try {
        await sendCodeAPI(this.mobile)
        this.isShowCodeBtn = false
        this.$toast.success('发送验证码成功')
      } catch (error) {
        if (
          (error.response && error.response.status === 429) ||
          error.response.status === 404
        ) {
          // axios的错误
          this.$toast.fail(error.response.data.message)
        } else {
          this.$toast.clear()
          throw error
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
// scoped样式作用于当前的组件
//vue-cli提供了语法：deep()深度选择器
.nav-bar {
  background-color: #3296fa;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
:deep(.form) {
  .van-cell__title {
    flex: 1;
  }
  .van-cell__value {
    flex: 20;
  }
  .toutiao {
    font-size: 40px;
  }
  .btn {
    height: 0.64rem;
    background-color: #eee;
    color: #a58594;
  }
}
</style>
