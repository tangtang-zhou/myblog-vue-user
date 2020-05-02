<template>
    <el-card class="box-card">
      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col :span="6">
          <router-link to="/userLogin"><el-link type="info">登录</el-link></router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/userRegister"><el-link type="info">注册</el-link></router-link>
        </el-col>
      </el-row>
      <router-view/>
    </el-card>
</template>

<script>
  export default {}
</script>

<style scoped>
  .box-card{
    width: 25%;
    margin-top: 75px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
  }
</style>
