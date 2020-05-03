<template>
  <el-form :model="loginForm" ref="loginFormRef" :rules="loginFormRules">
    <el-form-item prop="phone">
      <el-input placeholder="手机号或邮箱" prefix-icon="el-icon-user" v-model="loginForm.phone"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="密码" show-password prefix-icon="el-icon-lock" v-model="loginForm.password" @keyup.enter.native="login"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    inject: ['reload'],
    data () {
      return {
        loginForm: {
          phone: '',
          password: ''
        },
        loginFormRules: {
          phone: [
            {
              required: true, message: '请输入用户名', trigger: 'blur'
            },
            {
              min: 3, max: 11, message: '长度在 4 到 11 个字符', trigger: 'blur'
            }
          ],
          password: [
            {
              required: true, message: '请输入登录密码', trigger: 'blur'
            },
            {
              min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      login () {
        this.$refs.loginFormRef.validate(async validate => {
          if (!validate) return
          const { data: res } = await this.$http.post('/api/login', this.loginForm)
          console.log(res)
          this.$message.success('登录成功')
          window.sessionStorage.setItem('user', res)
          window.sessionStorage.setItem('token', res.token) // 保存token
          this.reload()
          this.$router.push('/main')// 编程式导航
        })
      }
    }
  }
</script>

<style scoped>
  .el-form{
    margin-top: 50px;
  }
  .el-button{
    width: 100%;
  }
</style>
