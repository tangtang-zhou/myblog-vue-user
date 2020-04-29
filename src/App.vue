<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
  body{
    background-image: url(../src/assets/img/index_bg.png);width: 100%;
  }
  .el-header{
    background: white;
    padding: 0;
  }
</style>
