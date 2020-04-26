<template>
  <div class="header-box">
    <div class="el-col-3">汤州的博客网站</div>
    <div class="el-col-10">
      <el-menu mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">博客分类</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">写博客</el-menu-item>
      </el-menu>
    </div>
    <div class="el-col-8">
      <el-input style="width: 70%" placeholder="请输入关键字搜索"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="el-col-3">
      <el-button icon="el-icon-user" v-if="user"></el-button>
      <el-button v-else>登录/注册</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: window.sessionStorage.getItem('user')
      }
    }
  }
</script>

<style >
  .header-box{
    margin: auto;
    width: 75%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
  }
  .header-box div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-box div:nth-child(1){
    justify-content: start;
  }
  .header-box div:nth-child(3){
    justify-content: space-between;
  }
  .header-box div:nth-child(4){
    justify-content: flex-end;
  }
  .el-input{
    width: 75%;
  }
</style>
