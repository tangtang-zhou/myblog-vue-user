<template>
  <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm">
    <el-form-item prop="phone">
      <el-input placeholder="请输入你的手机号" v-model="registerForm.phone"></el-input>
    </el-form-item>
    <el-form-item prop="password1">
      <el-input type="password" placeholder="请输入密码" v-model="registerForm.password1"></el-input>
    </el-form-item>
    <el-form-item prop="password2">
      <el-input type="password" placeholder="请确认密码" v-model="registerForm.password2"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.password2 !== '') {
          this.$refs.ruleForm.validateField('password2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        phone: '',
        password2: '',
        password1: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
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
