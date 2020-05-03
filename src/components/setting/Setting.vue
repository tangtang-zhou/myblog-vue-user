<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :router="true">
        <el-menu-item :index="'/personal'">
          <i class="el-icon-user"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item :index="'/password'">
          <i class="el-icon-lock"></i>
          <span slot="title">修改密码</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-message"></i>
          <span slot="title">修改邮箱</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-mobile-phone"></i>
          <span slot="title">修改手机</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-delete"></i>
          <span slot="title">账号注销</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  export default {}
</script>

<style scoped>
  .el-container {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px
  }
  .el-main{
    padding-top: 0;
  }
</style>
